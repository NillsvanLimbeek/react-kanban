import styled from 'styled-components';

import {
    flexAlign,
    black,
    grey,
    white,
    borderRadius,
    absolute,
    fixed,
} from '../../styling';

export const Wrapper = styled.div`
    ${flexAlign}

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
    ${absolute({ x: '7.5px', y: '2.75rem' })}
    z-index: 1000;

    color: ${(props) => (props.active ? `${black}` : `${grey}`)};
`;

export const ModalBackground = styled.div`
    ${fixed()}

    height: 100vh;
    width: 100vw;

    background: rgba(0, 0, 0, 0.25);
`;

export const ModalBody = styled.div`
    ${absolute({ x: '7rem' })}
    z-index: 100;

    width: 35rem;

    background: ${white};
    padding: 2rem;
    border-radius: ${borderRadius};
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.15);
`;
