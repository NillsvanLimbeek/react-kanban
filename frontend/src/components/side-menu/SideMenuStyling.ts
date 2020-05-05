import styled from 'styled-components';

import { white, grey, black } from '../../styling';

export const Body = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1001;

    height: 100vh;
    width: 30rem;

    background: ${white};
    border-bottom: 1px solid rgba(128, 128, 128, 0.25);
    box-shadow: 5px 0 5px rgba(0, 0, 0, 0.1);
    cursor: auto;
`;

export const Close = styled.i`
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;

    font-size: 2rem;
    color: ${grey};
    cursor: pointer;

    &:hover {
        color: ${black};
    }
`;

export const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;

    width: 100vw;
    height: 100vh;

    background: rgba(0, 0, 0, 0.25);
    cursor: auto;
`;
