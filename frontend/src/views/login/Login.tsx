import React from 'react';

import { useAuthState } from '../../context';

export const Login = () => {
    const { show } = useAuthState();

    return (
        <div>
            <h2>Login</h2>
            <button onClick={() => show()}>Login</button>

            <div id="auth-form"></div>
        </div>
    );
};
