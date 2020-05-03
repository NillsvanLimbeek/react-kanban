import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';

import { Wrapper, Header, Columns, H3, P, Add } from './BoardStyling';

import {
    useBoardsState,
    useBoardsDispatch,
    useColumnsState,
    useColumnsDispatch,
    useCardsState,
} from '../../context';

import { useColumnDrag, useCardDrag } from '../../hooks';

import { generateGuid } from '../../utils';

import { IBoard, IColumn } from '../../data';

import { Column } from './column/Column';
import { BoardSquare } from '../../components/board-square/BoardSquare';
import { DroppableComponent } from '../../components/droppable-component/DroppableComponent';
import { AddColumn } from '../../components/add-column/AddColumn';

type RouteInfo = {
    id: string;
};

export const Board = ({ match }: RouteComponentProps<RouteInfo>) => {
    // boards context
    const { boards } = useBoardsState();
    const boardsDispatch = useBoardsDispatch();

    // columns context
    const { columns } = useColumnsState();
    const columnsDispatch = useColumnsDispatch();

    // cards context
    const { cards } = useCardsState();

    // drag hooks
    const { updateColumns, updateBoard } = useColumnDrag();
    const { dragInSameColumn, dragInDifferentColumns } = useCardDrag();

    // state
    const [board, setBoard] = useState<IBoard | null>(null);
    const [boardColumns, setBoardColumns] = useState<IColumn[] | null>(null);
    const [newColumn, setNewColumn] = useState<IColumn | null>(null);

    useEffect(() => {
        // find board
        const board = boards.find((board) => board.id === match.params.id);

        board ? setBoard(board) : setBoard(null);

        // find columns
        const boardColumns: any = board?.columnIds.map((id) => {
            return columns.find((column) => column.id === id);
        });

        if (boardColumns) {
            setBoardColumns(boardColumns);
        }

        return () => {
            setBoardColumns(null);
        };
    }, [match, boards, columns]);

    const makeFavorite = (favorite: boolean) => {
        if (board) {
            boardsDispatch({
                type: 'UPDATE_BOARD',
                payload: { ...board, favorite },
            });
        }
    };

    const addColumn = () => {
        if (board) {
            const column = {
                title: '',
                id: generateGuid(),
                boardId: board.id,
                cardIds: [],
            };

            setNewColumn(column);
        }
    };

    const setColumnTitle = (title: string) => {
        // update title
        if (title.length && newColumn && board) {
            columnsDispatch({
                type: 'ADD_COLUMN',
                payload: { ...newColumn, title },
            });
            boardsDispatch({
                type: 'UPDATE_BOARD',
                payload: {
                    ...board,
                    columnIds: [...board.columnIds, newColumn.id],
                },
            });
        }

        setNewColumn(null);
    };

    const onDragEnd = (result: DropResult) => {
        result.type === 'column' ? columnDrag(result) : cardDrag(result);
    };

    const columnDrag = (result: DropResult) => {
        if (board) {
            const newColumns = updateColumns(board, columns, result);
            setBoardColumns(newColumns);

            // update board
            const newBoard = updateBoard(board, result);

            if (newBoard) {
                boardsDispatch({ type: 'UPDATE_BOARD', payload: newBoard });
            }
        }
    };

    // TODO ui flicker
    // has to do with local state of column
    // see columnDrag()
    const cardDrag = (result: DropResult) => {
        const { source, destination } = result;

        // drag in same column
        if (source.droppableId === destination?.droppableId) {
            const column = columns.find(
                (column) => column.id === result.source.droppableId,
            );

            if (column) {
                const newColumn = dragInSameColumn(column, result);

                if (newColumn) {
                    columnsDispatch({
                        type: 'UPDATE_COLUMN',
                        payload: newColumn,
                    });
                }
            }
        } else {
            // drag in different columns
            const newColumns = dragInDifferentColumns(columns, result);

            if (newColumns) {
                newColumns.forEach((column) => {
                    columnsDispatch({
                        type: 'UPDATE_COLUMN',
                        payload: column,
                    });
                });
            }
        }
    };

    return (
        <Wrapper>
            {board && (
                <>
                    <Header>
                        <BoardSquare
                            color={board.color}
                            favorite={board.favorite}
                            makeFavorite={makeFavorite}
                        />

                        <div>
                            <H3>{board.title}</H3>
                            <P>Nills</P>
                        </div>
                    </Header>

                    <DragDropContext onDragEnd={onDragEnd}>
                        <Columns>
                            <DroppableComponent
                                id={board.id}
                                type="column"
                                direction="horizontal"
                            >
                                {boardColumns?.map((column, index) => (
                                    <Column
                                        column={column}
                                        cards={cards}
                                        key={column.id}
                                        index={index}
                                    />
                                ))}
                            </DroppableComponent>

                            {!newColumn ? (
                                <Add onClick={addColumn}>Add Column</Add>
                            ) : (
                                <AddColumn setColumnTitle={setColumnTitle} />
                            )}
                        </Columns>
                    </DragDropContext>
                </>
            )}
        </Wrapper>
    );
};
