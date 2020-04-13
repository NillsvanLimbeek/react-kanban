import React, { useState, useEffect } from 'react';

import './BoardCard.scss';

import { IBoard } from '../../data/types/Board';
import { IColumn } from '../../data/types/Column';
import { ICard } from '../../data/types/Card';

type Props = {
    board: IBoard;
    columns: IColumn[];
    cards: ICard[];
};

export const BoardCard = ({ board, columns, cards }: Props) => {
    const [columnsLength, setColumnsLength] = useState(0);
    const [cardsLength, setCardsLength] = useState(0);

    useEffect(() => {
        // find columns
        const boardColumns = columns.filter(
            (column) => column.boardId === board.id,
        );
        setColumnsLength(boardColumns.length);

        // find cards
        let boardCards = 0;
        boardColumns.forEach((column) => (boardCards += column.cardIds.length));

        setCardsLength(boardCards);
    }, [columns, cards, board]);

    return (
        <div
            className="board-card"
            style={{ borderTop: `2px solid ${board.color}` }}
        >
            <div className="board-card__title">
                <p>{board.title}</p>
                {board.favorite && (
                    <i className="boards-card__star fas fa-star" />
                )}
            </div>

            <span className="board-card__info">
                {columnsLength} {columnsLength === 1 ? 'column' : 'columns'} |{' '}
                {cardsLength} {cardsLength === 1 ? 'card' : 'cards'}
            </span>
        </div>
    );
};
