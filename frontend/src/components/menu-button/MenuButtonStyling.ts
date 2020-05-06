import styled from 'styled-components';

import { flexCenterAlign, black, grey } from '../../styling';

export const Button = styled.button`
    ${flexCenterAlign}
    flex: 0 0 7rem;

    height: 100%;

    border: none;
    background-color: transparent;
    border-left: 1px solid rgba(128, 128, 128, 0.25);
    cursor: pointer;
`;

export const Icon = styled.i`
    color: ${grey};

    &:hover {
        color: ${black};
    }
`;
