import styled from 'styled-components';

import { FlexCenterAlign } from '../../assets/scss/utils/mixins';

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
    color: var(--color-grey);

    &:hover {
        color: var(--color-black);
    }
`;
