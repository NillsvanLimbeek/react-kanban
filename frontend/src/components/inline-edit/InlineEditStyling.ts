import styled from 'styled-components';

import { grey } from '../../styling';

export const Input = styled.input`
    width: 100%;

    padding: 5px 1rem;
    border: 0.25px solid ${grey};
    font-size: 1.6rem;
    font-family: 'Raleway';
    font-weight: 600;

    &::placeholder {
        font-weight: 400;
    }
`;
