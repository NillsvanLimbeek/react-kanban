import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { List, Add } from './BoardsListStyling';

import { useBoardsState } from '../../context/boards/boardsContext';
import { useColumnsState } from '../../context/columns/columnsContext';
import { useCardsState } from '../../context/cards/cardsContext';

import { IBoard } from '../../data/types/Board';

import { BoardCard } from '../../components/board-card/BoardCard';
import { Modal } from '../../components/modal/Modal';
import { ModalCenter } from '../../components/modal/ModalCenter';
import { AddBoard } from '../../components/forms/add-board/AddBoard';

export const BoardsList = () => {
    const { boards } = useBoardsState();
    const { columns } = useColumnsState();
    const { cards } = useCardsState();

    const [favorite, setFavorite] = useState(false);
    const [modal, setModal] = useState(false);

    const history = useHistory();

    useEffect(() => {
        if (boards.filter((board) => board.favorite).length) {
            setFavorite(true);
        }

        return () => setFavorite(false);
    }, [boards]);

    const redirectToBoard = (board: IBoard) => {
        history.push(`board/${board.id}`);
    };

    return (
        <div className="boards-list">
            {favorite && (
                <>
                    <h3>Favorite Boards</h3>

                    <List>
                        {boards.map((board) =>
                            board.favorite ? (
                                <Link to={`/board/${board.id}`} key={board.id}>
                                    <BoardCard
                                        board={board}
                                        columns={columns}
                                        cards={cards}
                                        key={board.id}
                                    />
                                </Link>
                            ) : null,
                        )}
                    </List>
                </>
            )}

            <>
                <h3>Personal Boards</h3>

                <List>
                    {boards.map((board) => (
                        <Link to={`/board/${board.id}`} key={board.id}>
                            <BoardCard
                                board={board}
                                columns={columns}
                                cards={cards}
                                key={board.id}
                            />
                        </Link>
                    ))}

                    <Add onClick={() => setModal(true)}>Add Board</Add>
                </List>
            </>

            {modal && (
                <Modal>
                    <ModalCenter closeModal={() => setModal(false)}>
                        <AddBoard onAddBoard={redirectToBoard} />
                    </ModalCenter>
                </Modal>
            )}
        </div>
    );
};
