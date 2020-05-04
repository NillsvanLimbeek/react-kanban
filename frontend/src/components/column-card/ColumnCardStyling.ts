import styled from 'styled-components';

export const Card = styled.div`
    padding: 1rem;
    border: 1px solid var(--color-grey-light);
    border-radius: var(--border-radius);
    background-color: var(--color-white);
    margin-bottom: 1.5rem;
    cursor: pointer;

    &:hover {
        border-color: var(--color-grey);
    }
`;

export const Labels = styled.div`
    display: flex;
`;

export const Label = styled.div`
    width: 3rem;
    height: 3px;

    border-radius: 3px;

    &:not(:last-child) {
        margin-right: 5px;
    }
`;

export const Title = styled.p`
    margin-top: 5px;
    font-weight: 500;
`;
