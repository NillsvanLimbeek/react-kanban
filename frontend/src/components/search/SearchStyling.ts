import styled from 'styled-components';

import { FlexAlign, black, grey, white, borderRadius } from '../../styling';

export const Wrapper = styled.div`
    ${FlexAlign}

    position: relative;

    width: 100%;
    flex: 0 0 20rem;
`;

export const Input = styled.input`
    position: relative;
    z-index: 100;

    width: 100%;

    font-family: 'Raleway';
    padding: 7.5px 1rem 7.5px 3rem;

    &:focus {
        outline: none;
    }
`;

export const Label = styled.label<{ active: boolean }>`
    position: absolute;
    left: 7.5px;
    z-index: 1000;

    color: ${(props) => (props.active ? `${black}` : `${grey}`)};
`;

export const ModalBackground = styled.div`
    position: fixed;
    top: 0;
    left: 0;

    height: 100vh;
    width: 100vw;

    background: rgba(0, 0, 0, 0.25);
`;

export const ModalBody = styled.div`
    position: absolute;
    top: 7rem;
    left: 0;
    z-index: 100;

    width: 35rem;

    background: ${white};
    padding: 2rem;
    border-radius: ${borderRadius};
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.15);
`;
