import React from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';

import { DraggableProps, DroppableProps } from './props';
import {
    DraggableWrapper,
    DroppableWrapper,
} from './DragDropComponentsStyling';

export const DraggableComponent = ({
    id,
    index,
    children,
    type,
}: DraggableProps) => {
    return (
        <Draggable draggableId={id} index={index}>
            {(provided) => (
                <DraggableWrapper
                    type={type}
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                >
                    {children}
                </DraggableWrapper>
            )}
        </Draggable>
    );
};

export const DroppableComponent = ({
    id,
    children,
    type,
    direction = 'vertical',
}: DroppableProps) => {
    return (
        <Droppable droppableId={id} type={type} direction={direction}>
            {(provided) => (
                <DroppableWrapper
                    type={type}
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                >
                    {children}

                    {provided.placeholder}
                </DroppableWrapper>
            )}
        </Droppable>
    );
};
