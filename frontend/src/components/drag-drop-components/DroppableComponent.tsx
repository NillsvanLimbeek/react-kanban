import React, { ReactNode } from 'react';
import { Droppable } from 'react-beautiful-dnd';

import './DragDrop.scss';

type Props = {
    id: string;
    children: ReactNode;
    type: 'column' | 'card';
    direction?: 'horizontal' | 'vertical';
};

export const DroppableComponent = ({
    id,
    children,
    type,
    direction = 'vertical',
}: Props) => {
    return (
        <Droppable droppableId={id} type={type} direction={direction}>
            {(provided) => (
                <div
                    className={
                        type === 'column'
                            ? 'droppable__column'
                            : 'dropabble__card'
                    }
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                >
                    {children}

                    {provided.placeholder}
                </div>
            )}
        </Droppable>
    );
};
