import styled from 'styled-components';

import { FlexCenterAlign } from '../../assets/scss/utils/mixins';

export const Button = styled.button`
    ${FlexCenterAlign}
    flex: 0 0 7rem;

    height: 100%;

    border: none;
    background-color: transparent;
    border-left: 1px solid rgba(128, 128, 128, 0.25);
    cursor: pointer;
`;

export const Icon = styled.i`
    color: var(--color-grey);

    &:hover {
        color: var(--color-black);
    }
`;
