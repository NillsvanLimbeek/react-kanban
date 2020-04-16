import React from 'react';

import { ICard } from '../../data/types/Card';

import { DraggableComponent } from '../droppable-component/DraggableComponent';
import { Card } from './Card';

type Props = {
    card: ICard;
    index: number;
};

export const DraggableCard = ({ card, index }: Props) => {
    return (
        <DraggableComponent id={card.id} index={index} type="card">
            <Card card={card} />
        </DraggableComponent>
    );
};
