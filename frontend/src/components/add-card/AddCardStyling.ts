import styled from 'styled-components';

import { borderRadius, greyLight, grey } from '../../styling';

export const TextArea = styled.textarea`
    height: 5rem;

    border-radius: ${borderRadius};
    border-color: ${greyLight};
    padding: 5px;
    resize: none;

    &:focus {
        outline: none;
        border-color: ${grey};
    }
`;
