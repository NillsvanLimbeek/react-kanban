import React, { useState, useEffect } from 'react';

import { Wrapper, Title, P, Span } from './BoardCardStyling';

import { IBoard, IColumn, ICard } from '../../data';

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
        const boardCards = boardColumns.reduce((total, column) => {
            return total + column.cardIds.length;
        }, 0);

        setCardsLength(boardCards);
    }, [columns, cards, board]);

    return (
        <Wrapper style={{ borderTop: `2px solid ${board.color}` }}>
            <Title>
                <P>{board.title}</P>
                {board.favorite && <i className="fas fa-star" />}
            </Title>

            <Span>
                {columnsLength} {columnsLength === 1 ? 'column' : 'columns'} |{' '}
                {cardsLength} {cardsLength === 1 ? 'card' : 'cards'}
            </Span>
        </Wrapper>
    );
};
