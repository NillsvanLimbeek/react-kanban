import styled from 'styled-components';

export const Wrapper = styled.div`
    padding: 4rem;

    & div {
        margin-bottom: 1.75rem;
    }
`;

export const H3 = styled.h3`
    margin-top: 0;
`;

export const Button = styled.button`
    width: 100%;

    padding: 7.5px 5px;
    font-size: 1.4rem;
    color: var(--color-white);
    background-color: var(--color-blue);
    border: none;
    cursor: pointer;

    &:hover {
        background: var(--color-blue-dark);
    }
`;
