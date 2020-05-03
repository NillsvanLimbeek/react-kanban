import styled from 'styled-components';

import { FlexAlign } from '../../assets/scss/utils/mixins';

export const Wrapper = styled.div`
    ${FlexAlign}
    justify-content: space-between;

    width: 85%;

    padding: 1rem 1.5rem;
    cursor: pointer;
`;

export const Main = styled.div`
    ${FlexAlign}
`;

export const Square = styled.i`
    font-size: 3.5rem;
    margin-right: 1.5rem;
`;

export const Title = styled.p`
    margin: 0;
    font-weight: 500;
`;

const Icon = styled.i`
    color: var(--color-grey);
    cursor: pointer;
`;

export const Trash = styled(Icon)`
    margin-right: 5px;

    &:hover {
        color: var(--color-black);
    }
`;

export const Star = styled(Icon)<{ favorite: boolean }>`
    &:hover {
        color: var(--color-yellow);
    }

    ${(props) =>
        props.favorite
            ? `
            color: var(--color-yellow);
            &:hover { color: var(--color-yellow-dark);}`
            : ''}
`;
