import styled from 'styled-components';

import { white, borderRadius, greyDark, black } from '../../styling';

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
`;

export const Header = styled.div`
    display: flex;

    margin-bottom: 2.5rem;
`;

export const H3 = styled.h3`
    margin: 0 0 5px 0;
    font-weight: 500;
`;

export const P = styled.p`
    margin: 0;
    font-size: 1.25rem;
`;

export const Columns = styled.div`
    display: flex;
`;

export const Add = styled.button`
    align-self: flex-start;

    width: 20rem;

    padding: 2rem 1.5rem;
    text-align: center;
    background: ${white};
    border: none;
    border-radius: ${borderRadius};
    box-shadow: 3px 3px 3px 1px rgba(128, 128, 128, 0.25);
    color: ${greyDark};
    cursor: pointer;

    &:hover {
        color: ${black};
    }
`;
