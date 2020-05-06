import { ReactNode } from 'react';

export type DraggableProps = {
    id: string;
    index: number;
    children: ReactNode;
    type?: 'card';
};

export type DroppableProps = {
    id: string;
    children: ReactNode;
    type: 'column' | 'card';
    direction?: 'horizontal' | 'vertical';
};
