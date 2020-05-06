import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Wrapper, Icon, NavLink, Logo } from './NavbarStyling';

import {
    useBoardsState,
    useBoardsDispatch,
    useCardsState,
} from '../../context';

import { BoardsMenu } from '../boards-menu/BoardsMenu';
import { Search } from '../search/Search';
import { UserButton } from '../user-button/UserButton';
import { NotificationsButton } from '../notifications-button/NotificationsButton';
import { MenuButton } from '../menu-button/MenuButton';

export const Navbar = () => {
    // boards context
    const { boards } = useBoardsState();
    const boardsDispatch = useBoardsDispatch();

    // cards context
    const { cards } = useCardsState();

    const [search, setSearch] = useState('');

    const removeBoard = (id: string) => {
        boardsDispatch({ type: 'REMOVE_BOARD', payload: id });
    };

    const favoriteBoard = (id: string) => {
        const board = boards.find((board) => board.id === id);

        if (board) {
            boardsDispatch({
                type: 'UPDATE_BOARD',
                payload: { ...board, favorite: !board.favorite },
            });
        }
    };

    return (
        <Wrapper>
            <BoardsMenu
                boards={boards}
                removeBoard={removeBoard}
                favoriteBoard={favoriteBoard}
            />
            <Search
                withModal
                search={search}
                onChange={(e) => setSearch(e.currentTarget.value)}
                boards={boards}
                cards={cards}
            />

            <Logo>
                <NavLink as={Link} to="/">
                    <Icon className="fab fa-trello" /> Trello
                </NavLink>
            </Logo>

            <UserButton />
            <NotificationsButton />
            <MenuButton />
        </Wrapper>
    );
};
