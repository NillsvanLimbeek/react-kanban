import styled from 'styled-components';

import { FlexCenterAlign, FlexAlign, white, grey, black } from '../../styling';

export const Wrapper = styled.nav`
    display: flex;

    height: 7.5rem;

    background: ${white};
    margin-bottom: 3.5rem;
    border-bottom: 1px solid rgba(128, 128, 128, 0.25);
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.1);
`;

export const Logo = styled.div`
    ${FlexCenterAlign}
    flex: 1 0 auto;
`;

export const NavLink = styled.div`
    ${FlexAlign}

    height: 100%;

    color: ${grey};
    font-size: 2rem;
    letter-spacing: 1px;
    cursor: pointer;

    &:hover {
        color: ${black};
    }
`;

export const Icon = styled.i`
    font-size: 2.5rem;
    margin-right: 1rem;
`;
