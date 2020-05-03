import styled from 'styled-components';

export const Wrapper = styled.div`
    height: 4rem;

    padding: 1rem;
    border: 1px solid var(--color-grey-dark);
    border-radius: var(--border-radius);
    background: var(--color-white);
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
    color: var(--color-black);
`;

export const Span = styled.span`
    font-size: 1.35rem;
    color: var(--color-grey-dark);
`;
