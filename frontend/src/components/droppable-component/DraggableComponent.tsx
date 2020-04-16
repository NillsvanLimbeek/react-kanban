import React, { ReactNode } from 'react';
import { Draggable } from 'react-beautiful-dnd';

type Props = {
    id: string;
    index: number;
    children: ReactNode;
    type?: 'card';
};

export const DraggableComponent = ({ id, index, children, type }: Props) => {
    return (
        <Draggable draggableId={id} index={index}>
            {(provided) => (
                <div
                    className={type === 'card' ? 'droppable__card' : ''}
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                >
                    {children}
                </div>
            )}
        </Draggable>
    );
};
