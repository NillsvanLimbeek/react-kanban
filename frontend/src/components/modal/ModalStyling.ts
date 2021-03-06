import styled from 'styled-components';

import {
    white,
    borderRadius,
    grey,
    black,
    absolute,
    fixed,
} from '../../styling';

export const Body = styled.div`
    ${absolute({ y: '25%', x: '50%' })}
    z-index: 1001;

    transform: translateX(-50%) translateY(-25%);
    background: ${white};
    box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.1);
    border-radius: ${borderRadius};
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
    ${fixed({})}
    z-index: 1000;

    width: 100vw;
    height: 100vh;

    background: rgba(0, 0, 0, 0.25);
    cursor: auto;
`;
