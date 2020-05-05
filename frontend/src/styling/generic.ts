import { css } from 'styled-components';

import { black } from './variables';

export const Generic = css`
    html {
        // 1REM
        font-size: 62.5%;
    }

    body {
        font-family: 'Raleway';
        font-size: 1.6rem;
        overflow: hidden;
    }

    a {
        color: ${black};
        text-decoration: none;
    }
`;
