import styled from 'styled-components';

export const List = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 2rem;

    &:not(:last-child) {
        margin-bottom: 5rem;
    }
`;

export const Add = styled.button`
    height: 6.25rem;

    padding: 1rem;
    border: 1px solid var(--color-grey);
    border-radius: var(--border-radius);
    color: var(--color-grey-dark);
    cursor: pointer;

    &:hover {
        color: var(--color-black);
        background-color: white;
    }
`;
