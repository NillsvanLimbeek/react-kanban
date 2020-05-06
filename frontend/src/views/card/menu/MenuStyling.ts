import styled from 'styled-components';

import { grey, borderRadius, white, greyLight } from '../../../styling';

export const H4 = styled.h4`
    margin: 0 0 1rem 0;
`;

export const Btn = styled.button`
    display: flex;
    align-items: center;

    width: 100%;

    font-size: 1.3rem;
    padding: 5px;
    border: 1px solid ${grey};
    border-radius: ${borderRadius};
    cursor: pointer;
    background-color: ${white};

    &:not(:last-child) {
        margin-bottom: 1rem;
    }

    &:hover {
        background-color: ${greyLight};
    }
`;

export const BtnIcon = styled.i`
    margin-right: 1rem;
`;

export const BtnP = styled.p`
    margin: 2.5px;
`;
