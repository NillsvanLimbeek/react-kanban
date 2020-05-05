import styled from 'styled-components';

import { grey, borderRadius, greyDark, black } from '../../styling';

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
    border: 1px solid ${grey};
    border-radius: ${borderRadius};
    color: ${greyDark};
    cursor: pointer;

    &:hover {
        color: ${black};
        background-color: white;
    }
`;
