import styled from 'styled-components';

import { flexCenterAlign, black, borderRadius, grey } from '../../styling';

export const Text = styled.p`
    font-size: 1.5rem;
    color: ${grey};
`;

export const Button = styled.button`
    ${flexCenterAlign}
    flex: 0 0 15rem;

    height: 100%;

    border: none;
    background-color: transparent;
    cursor: pointer;

    &:hover {
        ${Text},
        .user-button__text {
            color: ${black};
        }
    }
`;

export const Img = styled.img`
    width: 25%;

    border-radius: ${borderRadius};
    margin-right: 1rem;
`;
