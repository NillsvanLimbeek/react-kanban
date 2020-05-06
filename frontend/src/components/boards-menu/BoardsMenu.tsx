import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import {
    Wrapper,
    Add,
    AddIcon,
    Icon,
    Menu,
    MenuButton,
} from './BoardsMenuStyling';

import { SideMenu } from '../side-menu/SideMenu';
import { Search } from '../search/Search';
import { BoardListButton } from '../board-list-button/BoardListButton';
import { Modal } from '../modal/Modal';
import { ModalCenter } from '../modal/ModalCenter';
import { AddBoard } from '../forms/add-board/AddBoard';

import { IBoard } from '../../data';

type Props = {
    boards: IBoard[];
    removeBoard: (id: string) => void;
    favoriteBoard: (id: string) => void;
};

export const BoardsMenu = ({ boards, removeBoard, favoriteBoard }: Props) => {
    const [sideMenu, setSideMenu] = useState(false);
    const [search, setSearch] = useState('');
    const [filtererdBoards, setFilteredBoards] = useState<IBoard[]>([]);
    const [favoriteBoards, setFavoriteBoards] = useState<IBoard[]>([]);
    const [modal, setModal] = useState(false);

    const history = useHistory();
    const location = useLocation();

    // search for boards
    useEffect(() => {
        setFilteredBoards(
            boards.filter((board) => board.title.includes(search)),
        );

        return () => setFilteredBoards([]);
    }, [search, boards]);

    // favorite boards
    useEffect(() => {
        const favoriteBoards = boards.filter((board) => board.favorite);

        if (favoriteBoards.length) {
            setFavoriteBoards(favoriteBoards);
        }

        return () => setFavoriteBoards([]);
    }, [boards]);

    const redirectToBoard = (id: string) => {
        location.pathname.includes('board')
            ? history.push(`${id}`)
            : history.push(`board/${id}`);

        setSideMenu(false);
        setSearch('');
    };

    const openModal = () => {
        setSideMenu(false);
        setModal(true);
    };

    const onAddBoard = (board: IBoard) => {
        setModal(false);
        redirectToBoard(board.id);
    };

    return (
        <Wrapper>
            <MenuButton onClick={() => setSideMenu(true)}>
                <Icon className="fas fa-th" /> Boards
            </MenuButton>

            {sideMenu && (
                <SideMenu closeSideMenu={() => setSideMenu(false)}>
                    <Menu>
                        <Search
                            search={search}
                            onChange={(e) => setSearch(e.currentTarget.value)}
                        />

                        {favoriteBoards.length > 0 && (
                            <>
                                <h3>Favorite Boards</h3>

                                {favoriteBoards.map((board) => (
                                    <BoardListButton
                                        board={board}
                                        key={board.id}
                                        redirectTo={redirectToBoard}
                                        removeBoard={() => removeBoard}
                                        favoriteBoard={() => favoriteBoard}
                                    />
                                ))}
                            </>
                        )}

                        <>
                            <h3>Personal Boards</h3>

                            {filtererdBoards.map((board) => (
                                <BoardListButton
                                    board={board}
                                    key={board.id}
                                    redirectTo={redirectToBoard}
                                    removeBoard={removeBoard}
                                    favoriteBoard={favoriteBoard}
                                />
                            ))}

                            <Add onClick={openModal}>
                                <AddIcon className="fas fa-plus" /> Add Board
                            </Add>
                        </>
                    </Menu>
                </SideMenu>
            )}

            {modal && (
                <Modal>
                    <ModalCenter closeModal={() => setModal(false)}>
                        <AddBoard onAddBoard={onAddBoard} />
                    </ModalCenter>
                </Modal>
            )}
        </Wrapper>
    );
};
