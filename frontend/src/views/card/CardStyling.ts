import styled from 'styled-components';

import { white, borderRadius } from '../../styling';

export const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;

    width: 100vw;
    height: 100vh;

    background: rgba(0, 0, 0, 0.25);
    cursor: auto;
`;

export const Body = styled.div`
    position: absolute;
    left: 50%;
    top: 25%;
    transform: translateX(-50%) translateY(-25%);
    z-index: 1001;

    display: grid;
    grid-template-columns: 3fr 1fr;
    grid-template-rows: 1fr 1fr repeat(2, 2fr);
    grid-template-areas:
        'title menu'
        'labels menu'
        'description menu'
        'comments menu';
    gap: 2.5rem 1.5rem;

    width: 50rem;

    padding: 2.5rem;
    background: ${white};
    box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.1);
    border-radius: ${borderRadius};
    cursor: auto;
`;

// grid areas
export const Title = styled.div`
    display: flex;

    grid-area: title;
`;

export const Labels = styled.div`
    display: flex;

    grid-area: labels;
`;

export const Description = styled.div`
    display: flex;

    grid-area: description;
`;

export const Comments = styled.div`
    display: flex;

    grid-area: comments;
`;

export const SideMenu = styled.div`
    grid-area: menu;
    padding-top: 2.5rem;
`;

// elements
export const Icon = styled.i`
    flex: 0 0 3.5rem;

    margin-top: 3px;
`;

export const H3 = styled.h3`
    margin: 0 0 5px 0;
`;

export const P = styled.p`
    margin: 0;
`;
