import styled from 'styled-components';

import { FlexCenterAlign } from '../../assets/scss/utils/mixins';

export const Wrapper = styled.div`
    flex: 0 0 15rem;

    height: 100%;

    margin: 0 2.5rem 0 1rem;
`;

export const MenuButton = styled.button`
    ${FlexCenterAlign}

    height: 100%;

    border: none;
    background-color: transparent;
    color: var(--color-grey);
    cursor: pointer;

    &:hover {
        color: var(--color-black);

        i {
            color: var(--color-black);
        }
    }
`;

export const Icon = styled.i`
    color: lightgrey;
    margin-right: 1rem;
`;

export const Menu = styled.div`
    padding: 1rem 2.5rem;
`;

export const Add = styled.button`
    border: none;
    background-color: transparent;
    padding: 1rem 1.5rem;
    color: var(--color-grey-dark);
    cursor: pointer;

    &:hover {
        color: var(--color-black);
    }
`;

export const AddIcon = styled.i`
    padding: 7.5px;
    margin-right: 1rem;
    border: 1px dashed var(--color-grey-dark);
    border-radius: var(--border-radius);
    color: var(--color-grey-dark);
`;
