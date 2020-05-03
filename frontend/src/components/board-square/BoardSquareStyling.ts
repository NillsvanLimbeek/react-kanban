import styled from 'styled-components';

import { FlexCenterAlign } from '../../assets/scss/utils/mixins';

export const Square = styled.div`
    height: 4rem;
    width: 4rem;

    border-radius: var(--border-radius);
    margin-right: 1.5rem;
    cursor: pointer;
`;

export const Star = styled.i<{ favorite: boolean }>`
    ${FlexCenterAlign}

    width: 100%;
    height: 100%;

    font-size: 2rem;
    color: var(--color-white);

    &:hover {
        opacity: 0.5;
    }

    ${(props) => (props.favorite ? `opacity: 0;` : ``)}
`;
