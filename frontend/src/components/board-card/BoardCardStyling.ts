import styled from 'styled-components';

import { greyDark, borderRadius, white, black } from '../../styling';

export const Wrapper = styled.div`
    height: 6.25rem;

    padding: 1rem;
    border: 1px solid ${greyDark};
    border-radius: ${borderRadius};
    background: ${white};
`;

export const Title = styled.div`
    display: flex;
    justify-content: space-between;

    width: 100%;
`;

export const P = styled.p`
    margin: 0 0 5px 0;
    font-size: 1.5rem;
    font-weight: 500;
    color: ${black};
`;

export const Span = styled.span`
    font-size: 1.35rem;
    color: ${greyDark};
`;
