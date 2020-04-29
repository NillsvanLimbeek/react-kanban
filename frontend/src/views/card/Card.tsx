import React, { useEffect, useState, Fragment } from 'react';
import { RouteComponentProps, useHistory } from 'react-router-dom';

import './Card.scss';

import { useColumnsState, useCardsState } from '../../context';

import { IColumn, ICard } from '../../data';

import { InlineEdit } from '../../components/inline-edit/InlineEdit';
import { Labels } from './labels/Labels';
import { Menu } from './menu/Menu';

type RouteInfo = {
    id: string;
};

export const Card = ({ match }: RouteComponentProps<RouteInfo>) => {
    const history = useHistory();

    const { columns } = useColumnsState();
    const { cards } = useCardsState();

    const [card, setCard] = useState<ICard | null>(null);
    const [column, setColumn] = useState<IColumn | null>(null);
    const [editTitle, setEditTile] = useState(false);

    // find card
    useEffect(() => {
        const card = cards.find((card) => card.id === match.params.id);

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
    }, [columns, cards, match]);

    const updateCard = (e?: any) => {
        setEditTile(false);
    };

    return (
        <div className="card__background" onClick={() => history.goBack()}>
            <div className="card__body">
                {card && column && (
                    <Fragment>
                        <div className="card__title">
                            <i className="card__icon fas fa-chalkboard"></i>

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

                        <div className="card__labels">
                            <i className="card__icon card__icon--labels fas fa-tags"></i>

                            <div>
                                <h3>Labels</h3>
                                <Labels labels={card.labels} />
                            </div>
                        </div>

                        <div className="card__description">
                            <i className="card__icon fas fa-align-justify"></i>

                            <div>
                                <h3>Description</h3>
                            </div>
                        </div>

                        {/* activity */}

                        <div className="card__comments">
                            <i className="card__icon fas fa-list"></i>

                            <div>
                                <h3>Comments</h3>
                            </div>
                        </div>

                        <div className="card__side-menu">
                            <Menu />
                        </div>
                    </Fragment>
                )}
            </div>
        </div>
    );
};
