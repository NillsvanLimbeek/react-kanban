import styled from 'styled-components';

import {
    FlexAlign,
    white,
    borderRadius,
    boxShadow,
    greyDark,
    black,
} from '../../styling';

export const Wrapper = styled.div`
    align-self: flex-start;

    padding: 2rem 1.5rem;
    background-color: ${white};
    border-radius: ${borderRadius};
    box-shadow: ${boxShadow};
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
    color: ${greyDark};
    margin: 0;
    cursor: pointer;

    &:hover {
        color: ${black};
    }
`;

export const Icon = styled.i`
    color: ${greyDark};
    cursor: pointer;

    &:hover {
        color: ${black};
    }
`;
