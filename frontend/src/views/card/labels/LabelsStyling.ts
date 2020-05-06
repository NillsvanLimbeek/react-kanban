import styled from 'styled-components';

import { borderRadius, getColor } from '../../../styling';

export const Wrapper = styled.div`
    display: flex;
`;

export const Label = styled.div<{ color: string }>`
    width: 3.5rem;
    height: 3.5rem;

    border-radius: ${borderRadius};
    margin-right: 7.5px;

    ${({ color }) => getColor(color)};
`;

export const Icon = styled.i`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 3.5rem;
    height: 3.5rem;

    box-shadow: inset 0 0 0 1px lightgrey;
    border-radius: ${borderRadius};
    color: lightgrey;
    cursor: pointer;
`;
