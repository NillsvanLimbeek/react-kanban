import styled from 'styled-components';

import { grey, absolute } from '../../styling';

export const Wrapper = styled.div`
    position: relative;
`;

export const Label = styled.label<{ focus: boolean }>`
    ${absolute({ y: '5px', x: '6px' })};

    font-size: 1.4rem;
    background: white;
    transition: all 0.2s ease-in-out;
    padding: 0 2.5px;

    ${(props) =>
        props.focus &&
        `
            font-size: 1.25rem;
            transform: translateY(-1.75rem);
            transition: all 0.2s ease-in-out;
            `};
`;

export const Input = styled.input`
    padding: 5px 1rem;
    border: 0.25px solid ${grey};
`;
