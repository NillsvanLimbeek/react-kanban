import { State, Action } from './authTypes';

export default (state: State, action: Action) => {
    switch (action.type) {
        case 'SET_AUTHENTICATED':
            return { ...state, isAuthenticated: action.payload };
        case 'SET_LOADING':
            return { ...state, isLoading: action.payload };
        case 'SET_ACCESSTOKEN':
            return { ...state, accessToken: action.payload };
        case 'SET_SESSION':
            return { ...state, session: action.payload };
        default:
            return state;
    }
};
