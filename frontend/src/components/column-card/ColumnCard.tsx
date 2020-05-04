import React from 'react';

import { Card, Labels, Label, Title } from './ColumnCardStyling';

import { ICard } from '../../data';

type Props = {
    card: ICard;
};

export const ColumnCard = ({ card }: Props) => {
    return (
        <Card>
            <Labels>
                {card.labels.length > 0 &&
                    card.labels.map((label) => (
                        <Label
                            style={{
                                backgroundColor: `var(--color-${label})`,
                            }}
                            key={label}
                        />
                    ))}
            </Labels>

            <Title>{card.title}</Title>
        </Card>
    );
};
