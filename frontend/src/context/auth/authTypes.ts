export type Props = {
    children: React.ReactNode;
};

export type SessionProps = {
    accessToken: string;
    expiresAt: number;
    scopes: string;
    sub: string;
    email: string | undefined;
    emailVerified: boolean | undefined;
};

export type State = {
    isAuthenticated: boolean;
    isLoading: boolean;
    show(options?: Auth0LockShowOptions): void;
    logout(returnUrl?: string): void;
    accessToken: string | undefined;
    session: SessionProps | undefined;
};

export type Dispatch = (action: Action) => void;

export type Action =
    | { type: 'SET_AUTHENTICATED'; payload: boolean }
    | { type: 'SET_LOADING'; payload: boolean }
    | { type: 'SET_SESSION'; payload: SessionProps }
    | { type: 'SET_ACCESSTOKEN'; payload: string };
