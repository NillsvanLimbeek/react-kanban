import styled from 'styled-components';

import { FlexCenterAlign, grey, black } from '../../styling';

export const Button = styled.button`
    ${FlexCenterAlign}
    flex: 0 0 5rem;

    height: 100%;

    margin-right: 1rem;
    border: none;
    background-color: transparent;
    cursor: pointer;
`;

export const Bell = styled.i`
    color: ${grey};

    &:hover {
        color: ${black};
    }
`;
