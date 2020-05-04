import styled from 'styled-components';

import { FlexAlign } from '../../assets/scss/utils/mixins';

export const Wrapper = styled.div`
    align-self: flex-start;

    padding: 2rem 1.5rem;
    background-color: var(--color-white);
    border-radius: var(--border-radius);
    box-shadow: var(--box-shadow);
`;

export const Input = styled.input`
    /* width: 89%; */
`;

export const Add = styled.button`
    ${FlexAlign}
    justify-content: space-between;

    width: 100%;

    background: transparent;
    border: none;
    margin: 2rem 0 1rem 0;
`;

export const P = styled.p`
    color: var(--color-grey-dark);
    margin: 0;
    cursor: pointer;

    &:hover {
        color: var(--color-black);
    }
`;

export const Icon = styled.i`
    color: var(--color-grey-dark);
    cursor: pointer;

    &:hover {
        color: var(--color-black);
    }
`;
