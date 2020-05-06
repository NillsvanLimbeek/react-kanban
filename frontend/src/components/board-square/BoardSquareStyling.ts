import styled from 'styled-components';

import { flexCenterAlign, borderRadius, white } from '../../styling';

export const Square = styled.div`
    height: 4rem;
    width: 4rem;

    border-radius: ${borderRadius};
    margin-right: 1.5rem;
    cursor: pointer;
`;

export const Star = styled.i<{ favorite: boolean }>`
    ${flexCenterAlign}

    width: 100%;
    height: 100%;

    font-size: 2rem;
    color: ${white};

    &:hover {
        opacity: 0.5;
    }

    ${(props) => props.favorite && `opacity: 0;`}
`;
