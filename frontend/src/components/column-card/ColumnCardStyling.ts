import styled from 'styled-components';

import { greyLight, borderRadius, white, grey, getColor } from '../../styling';

export const Card = styled.div`
    padding: 1rem;
    border: 1px solid ${greyLight};
    border-radius: ${borderRadius};
    background-color: ${white};
    margin-bottom: 1.5rem;
    cursor: pointer;

    &:hover {
        border-color: ${grey};
    }
`;

export const Labels = styled.div`
    display: flex;
`;

export const Label = styled.div<{ color: string }>`
    width: 3rem;
    height: 3px;

    border-radius: 3px;
    ${({ color }) => getColor(color)};

    &:not(:last-child) {
        margin-right: 5px;
    }
`;

export const Title = styled.p`
    margin-top: 5px;
    font-weight: 500;
`;
