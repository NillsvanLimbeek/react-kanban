import styled from 'styled-components';

export const DroppableWrapper = styled.div<{ type: 'card' | 'column' }>`
    ${(props) =>
        props.type === 'column' ? 'display: flex;' : 'margin-bottom: 1.5rem;'}
`;

export const DraggableWrapper = styled.div<{ type: 'card' | undefined }>`
    ${(props) => (props.type === 'card' ? 'margin-bottom: 1.5rem' : '')}
`;

// export const Column = styled.div`
//     display: flex;
// `;

// export const Card = styled.div`
//     margin-bottom: 1.5rem;
// `;
