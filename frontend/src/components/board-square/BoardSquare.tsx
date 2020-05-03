import React from 'react';

import { Square, Star } from './BoardSquareStyling';

type Props = {
    color: string;
    favorite: boolean;
    makeFavorite: (favorite: boolean) => void;
};

export const BoardSquare = ({ color, favorite, makeFavorite }: Props) => {
    return (
        <Square
            style={{
                backgroundColor: `${color}`,
                boxShadow: `2px 2px 7px 2px ${color}4d`,
            }}
        >
            <Star
                className="fas fa-star"
                onClick={() => makeFavorite(!favorite)}
                favorite={!favorite}
            />
        </Square>
    );
};
