import styled from 'styled-components';

import { flexCenterAlign, grey, black } from '../../styling';

export const Bell = styled.i`
    color: ${grey};
`;

export const Button = styled.button`
    ${flexCenterAlign}
    flex: 0 0 5rem;

    height: 100%;

    margin-right: 1rem;
    border: none;
    background-color: transparent;
    cursor: pointer;

    &:hover {
        ${Bell} {
            color: ${black};
        }
    }
`;
