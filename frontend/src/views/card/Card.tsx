import React, { useEffect, useState } from 'react';
import { RouteComponentProps, useHistory } from 'react-router-dom';

import {
    Background,
    Body,
    Icon,
    H3,
    P,
    Title,
    Comments,
    Description,
    Labels,
    SideMenu,
} from './CardStyling';

import { useCardsState } from '../../context/cards/cardsContext';
import { useColumnsState } from '../../context/columns/columnsContext';

import { ICard } from '../../data/types/Card';
import { IColumn } from '../../data/types/Column';

import { InlineEdit } from '../../components/inline-edit/InlineEdit';
import { Labels as LabelsComponent } from './labels/Labels';
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
        <Background onClick={() => history.goBack()}>
            <Body>
                {card && column && (
                    <>
                        <Title>
                            <Icon className="fas fa-chalkboard" />

                            <div>
                                {!editTitle ? (
                                    <H3 onClick={() => setEditTile(true)}>
                                        {card.title}
                                    </H3>
                                ) : (
                                    <InlineEdit
                                        value={card.title}
                                        onBlur={(title) => updateCard(title)}
                                    />
                                )}

                                {/* TODO modal to move card to different board and/or column */}
                                <P>In column - {column.title}</P>
                            </div>
                        </Title>

                        <Labels>
                            <Icon className="fas fa-tags" />

                            <div>
                                <H3>Labels</H3>
                                <LabelsComponent labels={card.labels} />
                            </div>
                        </Labels>

                        <Description>
                            <Icon className="fas fa-align-justify" />

                            <div>
                                <H3>Description</H3>
                            </div>
                        </Description>

                        {/* activity */}

                        <Comments>
                            <Icon className="fas fa-list" />

                            <div>
                                <H3>Comments</H3>
                            </div>
                        </Comments>

                        <SideMenu>
                            <Menu />
                        </SideMenu>
                    </>
                )}
            </Body>
        </Background>
    );
};
