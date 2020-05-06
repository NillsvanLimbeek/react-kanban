import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import {
    Wrapper,
    Header,
    Icon,
    Title,
    TitleH4,
    ColumnDropdown,
    Add,
} from './ColumnStyling';

import {
    useBoardsState,
    useBoardsDispatch,
    useColumnsDispatch,
    useCardsDispatch,
} from '../../../context';

import { generateGuid } from '../../../utils';

import { IBoard, IColumn, ICard } from '../../../data';

import { InlineEdit } from '../../../components/inline-edit/InlineEdit';
import { Dropdown } from '../../../components/dropdown/Dropdown';
import {
    DroppableComponent,
    DraggableComponent,
} from '../../../components/drag-drop-components/DragDropComponents';
import { DraggableCard } from '../../../components/column-card/DraggableCard';
import { AddCard } from '../../../components/add-card/AddCard';

type Props = {
    column: IColumn;
    cards: ICard[];
    index: number;
};

export const Column = ({ column, cards, index }: Props) => {
    // context
    const { boards } = useBoardsState();
    const boardsDispatch = useBoardsDispatch();
    const columnsDispatch = useColumnsDispatch();
    const cardsDispatch = useCardsDispatch();

    // state
    const [columnCards, setColumnCards] = useState<ICard[] | null>(null);
    const [editTitle, setEditTitle] = useState(false);
    const [dropdown, setDropdown] = useState(false);
    const [newCard, setNewCard] = useState<ICard | null>(null);

    // find cards
    useEffect(() => {
        const columnCards: any = column.cardIds.map((id) => {
            return cards.find((card) => card.id === id);
        });

        if (columnCards) {
            setColumnCards(columnCards);
        }

        return () => {
            setColumnCards(null);
        };
    }, [column, cards]);

    const addCard = () => {
        const cardId = generateGuid();
        const card: ICard = {
            title: 'Card',
            id: cardId,
            columnId: column.id,
            labels: [],
        };

        setNewCard(card);
    };

    const setColumnTitle = (title: string) => {
        const previousTitle = column.title;

        // leave old title on empty
        if (title.length === 0 && previousTitle) {
            setEditTitle(false);
            return;
        }

        // update title
        if (title.length) {
            columnsDispatch({
                type: 'UPDATE_COLUMN',
                payload: { ...column, title },
            });

            setEditTitle(false);
            return;
        }

        // delete if there is no title
        const board = boards.find((board) => board.id === column.boardId);

        if (board) {
            const newBoard: IBoard = {
                ...board,
                columnIds: board.columnIds.filter((id) => id !== column.id),
            };

            boardsDispatch({ type: 'UPDATE_BOARD', payload: newBoard });
            columnsDispatch({ type: 'DELETE_COLUMN', payload: column.id });
        }
    };

    const setCardTitle = (title: string) => {
        // update title
        if (title.length && newCard) {
            cardsDispatch({
                type: 'ADD_CARD',
                payload: { ...newCard, title },
            });
            columnsDispatch({
                type: 'UPDATE_COLUMN',
                payload: {
                    ...column,
                    cardIds: [...column.cardIds, newCard.id],
                },
            });
        }

        setNewCard(null);
    };

    return (
        <DraggableComponent id={column.id} index={index}>
            <Wrapper>
                <Header>
                    <Title>
                        <Icon className="far fa-circle" />

                        {column.title.length && !editTitle ? (
                            <TitleH4 onClick={() => setEditTitle(true)}>
                                {column.title}
                            </TitleH4>
                        ) : (
                            <InlineEdit
                                value={column.title}
                                onBlur={setColumnTitle}
                            />
                        )}
                    </Title>

                    <ColumnDropdown>
                        <Icon
                            className="fas fa-ellipsis-h"
                            onClick={() => setDropdown(true)}
                        />

                        {dropdown && (
                            <Dropdown
                                onClickOutside={() => setDropdown(!dropdown)}
                            >
                                Test
                            </Dropdown>
                        )}
                    </ColumnDropdown>
                </Header>

                <DroppableComponent id={column.id} type="card">
                    {columnCards?.map((card, index) => (
                        <Link
                            to={`/board/${column.boardId}/card/${card.id}`}
                            id={card.id}
                            key={card.id}
                        >
                            <DraggableCard
                                card={card}
                                key={card.id}
                                index={index}
                            />
                        </Link>
                    ))}
                </DroppableComponent>

                {!newCard ? (
                    <Add onClick={addCard}>Add Card</Add>
                ) : (
                    <AddCard setTitle={setCardTitle} />
                )}
            </Wrapper>
        </DraggableComponent>
    );
};
