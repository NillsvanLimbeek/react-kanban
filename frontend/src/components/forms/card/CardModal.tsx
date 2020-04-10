import React, { useEffect, useState, Fragment } from 'react';

import './CardModal.scss';

import {
    useCardsState,
    // useCardsDispatch,
} from '../../../context/cards/cardsContext';
import { useColumnsState } from '../../../context/columns/columnsContext';

import { ICard } from '../../../data/types/Card';
import { IColumn } from '../../../data/types/Column';

import { InlineEdit } from '../../inline-edit/InlineEdit';
import { Labels } from './labels/Labels';
import { Menu } from './menu/Menu';

type Props = {
    id: string;
};

export const CardModal = ({ id }: Props) => {
    const { columns } = useColumnsState();
    const { cards } = useCardsState();

    const [card, setCard] = useState<ICard | null>(null);
    const [column, setColumn] = useState<IColumn | null>(null);
    const [editTitle, setEditTile] = useState(false);

    // find card
    useEffect(() => {
        const card = cards.find((card) => card.id === id);

        if (card) {
            setCard(card);

            // find column
            const column = columns.find(
                (column) => column.id === card.columnId,
            );
            column ? setColumn(column) : setColumn(null);
        }

        return () => {
            setCard(null);
            setColumn(null);
        };
    }, [columns, cards, id]);

    const updateCard = (e?: any) => {
        setEditTile(false);
    };

    return (
        <div className="card-modal">
            {card && column && (
                <Fragment>
                    <div className="card-modal__title">
                        <i className="card-modal__icon fas fa-chalkboard"></i>

                        <div>
                            {!editTitle ? (
                                <h3 onClick={() => setEditTile(true)}>
                                    {card.title}
                                </h3>
                            ) : (
                                <InlineEdit
                                    value={card.title}
                                    onBlur={(title) => updateCard(title)}
                                />
                            )}

                            {/* TODO modal to move card to different board and/or column */}
                            <p>In column - {column.title}</p>
                        </div>
                    </div>

                    <div className="card-modal__labels">
                        <i className="card-modal__icon card-modal__icon--labels fas fa-tags"></i>

                        <div>
                            <h3>Labels</h3>
                            <Labels labels={card.labels} />
                        </div>
                    </div>

                    <div className="card-modal__description">
                        <i className="card-modal__icon fas fa-align-justify"></i>

                        <div>
                            <h3>Description</h3>
                        </div>
                    </div>

                    {/* activity */}

                    <div className="card-modal__comments">
                        <i className="card-modal__icon fas fa-list"></i>

                        <div>
                            <h3>Comments</h3>
                        </div>
                    </div>

                    <div className="card-modal__side-menu">
                        <Menu />
                    </div>
                </Fragment>
            )}
        </div>
    );
};
