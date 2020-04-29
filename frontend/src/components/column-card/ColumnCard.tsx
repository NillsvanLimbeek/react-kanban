import React from 'react';

import './ColumnCard.scss';

import { ICard } from '../../data';

type Props = {
    card: ICard;
};

export const ColumnCard = ({ card }: Props) => {
    return (
        <div className="column-card">
            <div className="column-card__labels">
                {card.labels.length > 0 &&
                    card.labels.map((label) => (
                        <div
                            className="column-card__label"
                            style={{
                                backgroundColor: `var(--color-${label})`,
                            }}
                            key={label}
                        />
                    ))}
            </div>

            <p className="column-card__title">{card.title}</p>
        </div>
    );
};
