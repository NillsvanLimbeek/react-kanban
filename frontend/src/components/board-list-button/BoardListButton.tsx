import React from 'react';

import {
    Wrapper,
    Main,
    Square,
    Title,
    Trash,
    Star,
} from './BoardListButtonStyling';

import { IBoard } from '../../data';

type Props = {
    board: IBoard;
    redirectTo: (id: string) => void;
    removeBoard: (id: string) => void;
    favoriteBoard: (id: string) => void;
};

export const BoardListButton = ({
    board,
    redirectTo,
    removeBoard,
    favoriteBoard,
}: Props) => {
    return (
        <Wrapper>
            <Main onClick={() => redirectTo(board.id)}>
                <Square
                    className="fas fa-square"
                    style={{ color: `${board.color}` }}
                />
                <Title>{board.title}</Title>
            </Main>

            <div className="board-list-button__actions">
                <Trash
                    className="fas fa-trash"
                    onClick={() => removeBoard(board.id)}
                />
                <Star
                    className="fas fa-star"
                    favorite={board.favorite}
                    onClick={() => favoriteBoard(board.id)}
                />
            </div>
        </Wrapper>
    );
};
