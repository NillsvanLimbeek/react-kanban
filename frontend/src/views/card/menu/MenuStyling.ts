import styled from 'styled-components';

export const H4 = styled.h4`
    margin: 0 0 1rem 0;
`;

export const Btn = styled.button`
    display: flex;
    align-items: center;

    width: 100%;

    font-size: 1.3rem;
    padding: 5px;
    border: 1px solid var(--color-grey);
    border-radius: var(--border-radius);
    cursor: pointer;
    background-color: var(--color-white);

    &:not(:last-child) {
        margin-bottom: 1rem;
    }

    &:hover {
        background-color: var(--color-grey-light);
    }
`;

export const BtnIcon = styled.i`
    margin-right: 1rem;
`;

export const BtnP = styled.p`
    margin: 2.5px;
`;
