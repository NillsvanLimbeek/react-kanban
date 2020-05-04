import React from 'react';

import { ICard } from '../../data/types/Card';

import { DraggableComponent } from '../drag-drop-components/DragDropComponents';
import { ColumnCard } from './ColumnCard';

type Props = {
    card: ICard;
    index: number;
};

export const DraggableCard = ({ card, index }: Props) => {
    return (
        <DraggableComponent id={card.id} index={index} type="card">
            <ColumnCard card={card} />
        </DraggableComponent>
    );
};
