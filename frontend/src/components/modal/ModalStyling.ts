import styled from 'styled-components';

export const Body = styled.div`
    position: absolute;
    left: 50%;
    top: 25%;
    z-index: 1001;

    transform: translateX(-50%) translateY(-25%);
    background: var(--color-white);
    box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.1);
    border-radius: var(--border-radius);
    cursor: auto;
`;

export const Close = styled.i`
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;

    font-size: 2rem;
    color: var(--color-grey);
    cursor: pointer;

    &:hover {
        color: var(--color-black);
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
