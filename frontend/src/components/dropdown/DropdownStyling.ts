import styled from 'styled-components';

import { white, grey, borderRadius, absolute } from '../../styling';

export const Wrapper = styled.div`
    ${absolute({ y: '2.5rem' })}

    width: 25rem;

    padding: 1rem;
    background-color: ${white};
    border: 1px solid ${grey};
    border-radius: ${borderRadius};
`;
