import styled from 'styled-components';

import {
    FlexCenterAlign,
    grey,
    black,
    greyDark,
    borderRadius,
} from '../../styling';

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
    color: ${grey};
    cursor: pointer;

    &:hover {
        color: ${black};

        i {
            color: ${black};
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
    color: ${greyDark};
    cursor: pointer;

    &:hover {
        color: ${black};
    }
`;

export const AddIcon = styled.i`
    padding: 7.5px;
    margin-right: 1rem;
    border: 1px dashed ${greyDark};
    border-radius: ${borderRadius};
    color: ${greyDark};
`;
