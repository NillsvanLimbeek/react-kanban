import React, { useReducer, createContext, useContext, useEffect } from 'react';
import Auth0Lock from 'auth0-lock';

import AuthReducer from './authReducer';
import { State, Dispatch, Props } from './authTypes';

const initialState: State = {
    isAuthenticated: false,
    isLoading: false,
    show: (options?: Auth0LockShowOptions) => null,
    logout: (returnUrl?: string) => null,
    accessToken: undefined,
    session: undefined,
};

// create context
const AuthStateContext = createContext<State | undefined>(undefined);
const AuthDispatchContext = createContext<Dispatch | undefined>(undefined);

// create auth client
let authClient: Auth0LockStatic;

function AuthProvider({ children }: Props) {
    const [state, dispatch] = useReducer(AuthReducer, initialState);

    useEffect(() => {
        if (!authClient) {
            setupClient();
        }

        // renewToken();
    }, []); // eslint-disable-line

    function setupClient() {
        const { REACT_APP_AUTH_CLIENT_ID, REACT_APP_AUTH_DOMAIN } = process.env;

        if (!REACT_APP_AUTH_CLIENT_ID || !REACT_APP_AUTH_DOMAIN) {
            throw new Error('Missing Auth0 configuration');
        }

        const options = {
            auth: {
                audience: 'api:gateway',
                responseType: 'token',
                redirectUrl: `${window.location.origin}/`,
            },
            container: 'auth-form',
            language: 'en',
            avatar: null,
            closable: false,
        };

        authClient = new Auth0Lock(
            REACT_APP_AUTH_CLIENT_ID,
            REACT_APP_AUTH_DOMAIN,
            options,
        );

        authClient.on('authenticated', (authResult: AuthResult) => {
            console.log(authResult);
            handleAuthResult(authResult);
        });
    }

    function handleAuthResult(authResult: AuthResult) {
        if (!authResult.accessToken)
            throw new Error('Auth result does not contain accesstoken');

        authClient.getUserInfo(
            authResult.accessToken,
            (err: auth0.Auth0Error, profile: auth0.Auth0UserProfile) => {
                if (err) {
                    // TODO: handle error
                    console.log('getUserInfo err', err);
                    // setIsLoading(false);
                    return;
                }

                const { accessToken, expiresIn, scope } = authResult;
                const { sub, email, email_verified: emailVerified } = profile;

                dispatch({
                    type: 'SET_SESSION',
                    payload: {
                        accessToken,
                        scopes: scope || '',
                        expiresAt: expiresIn * 1000 + new Date().getTime(),
                        sub,
                        email,
                        emailVerified,
                    },
                });

                dispatch({ type: 'SET_AUTHENTICATED', payload: true });
                dispatch({ type: 'SET_LOADING', payload: false });
                dispatch({ type: 'SET_ACCESSTOKEN', payload: accessToken });

                console.log(accessToken);
            },
        );
    }

    const show = (options?: Auth0LockShowOptions) => {
        console.log(authClient);
        authClient.show();
    };

    // function renewToken() {
    //     authClient.checkSession(
    //         {},
    //         (err: auth0.Auth0Error, authResult: AuthResult | undefined) => {
    //             if (err) {
    //                 if (err.code === 'login_required') {
    //                     // TODO?
    //                 }

    //                 console.log('checkSession error', err);
    //                 dispatch({ type: 'SET_LOADING', payload: false });
    //                 return;
    //             }

    //             if (authResult) {
    //                 handleAuthResult(authResult);
    //             }
    //         },
    //     );
    // }

    return (
        <AuthStateContext.Provider
            value={{
                isAuthenticated: state.isAuthenticated,
                isLoading: state.isLoading,
                show,
                logout: state.logout,
                accessToken: state.accessToken,
                session: state.session,
            }}
        >
            <AuthDispatchContext.Provider value={dispatch}>
                {children}
            </AuthDispatchContext.Provider>
        </AuthStateContext.Provider>
    );
}

function useAuthState() {
    const context = useContext(AuthStateContext);

    if (context === undefined) {
        throw new Error('useAuthState must be used within a AuthProvider');
    }

    return context;
}

function useAuthDispatch() {
    const context = useContext(AuthDispatchContext);

    if (context === undefined) {
        throw new Error('useAuthDispatch must be used within a AuthProvider');
    }

    return context;
}

export { AuthProvider, useAuthState, useAuthDispatch };
