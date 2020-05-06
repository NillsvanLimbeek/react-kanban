import React, { useState } from 'react';

import { Wrapper, H3, Button } from './AddBoardStyling';

import { useBoardsDispatch } from '../../../context';

import { generateGuid } from '../../../utils/guid';
import { IBoard } from '../../../data';

import { BaseInput } from '../../base-input/BaseInput';

type Props = {
    onAddBoard: (board: IBoard) => void;
};

export const AddBoard = ({ onAddBoard }: Props) => {
    const boardsDispatch = useBoardsDispatch();

    const [board, setBoard] = useState<IBoard>({
        title: '',
        color: '',
        favorite: false,
        id: '',
        columnIds: [],
    });

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        boardsDispatch({ type: 'ADD_BOARD', payload: board });
        onAddBoard(board);
    };

    const setInput = (e: React.FormEvent<HTMLInputElement>) => {
        setBoard({
            ...board,
            [e.currentTarget.name]: e.currentTarget.value,
            favorite: false,
            id: generateGuid(),
        });
    };

    return (
        <Wrapper>
            <H3>Add Board</H3>

            <form onSubmit={onSubmit}>
                <BaseInput
                    name="title"
                    label="Board Name"
                    value={board.title}
                    onChange={setInput}
                />
                <BaseInput
                    name="color"
                    label="Color"
                    value={board.color}
                    onChange={setInput}
                />

                <Button>Submit</Button>
            </form>
        </Wrapper>
    );
};
