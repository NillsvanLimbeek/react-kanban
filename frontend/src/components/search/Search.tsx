import React, { useState, useEffect } from 'react';

import './Search.scss';

import { IBoard, ICard } from '../../data/';

import { ColumnCard } from '../column-card/ColumnCard';

type Props = {
    search: string;
    onChange: (e: React.FormEvent<HTMLInputElement>) => void;
    withModal?: boolean;
    boards?: IBoard[];
    cards?: ICard[];
};

export const Search = ({
    search,
    onChange,
    withModal,
    boards,
    cards,
}: Props) => {
    const [showModal, setShowModal] = useState(false);
    const [searchedBoards, setSearchedBoard] = useState<IBoard[] | undefined>(
        undefined,
    );
    const [searchedCards, setSearchedCard] = useState<ICard[] | undefined>(
        undefined,
    );

    // set modal
    useEffect(() => {
        return search.length > 0 ? setShowModal(true) : setShowModal(false);
    }, [search]);

    // search for boards
    // TODO create generic filter
    useEffect(() => {
        const searchBoards = boards?.filter((board) =>
            board.title.includes(search),
        );
        setSearchedBoard(searchBoards);
    }, [search, boards]);

    // search for cards
    // TODO create generic filter
    useEffect(() => {
        const searchCards = cards?.filter((card) =>
            card.title.includes(search),
        );
        setSearchedCard(searchCards);
    }, [search, cards]);

    return (
        <div className="search">
            <label className="search__icon" htmlFor="search">
                <i className="fas fa-search" />
            </label>

            <input
                className="search__input"
                type="text"
                name="search"
                placeholder="Search..."
                value={search}
                onChange={onChange}
            />

            {withModal && showModal && (
                <div className="search__modal">
                    <div className="search__modal-body">
                        <>
                            <h4>Cards</h4>
                            {searchedCards?.map((card) => {
                                return <ColumnCard card={card} key={card.id} />;
                            })}
                        </>

                        <>
                            <h4>Boards</h4>
                            {searchedBoards?.map((board) => {
                                return <p key={board.id}>{board.title}</p>;
                            })}
                        </>
                    </div>

                    <div className="search__modal-background" />
                </div>
            )}
        </div>
    );
};
