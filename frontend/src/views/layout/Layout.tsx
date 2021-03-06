import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Wrapper, Main } from './LayoutStyle';

import { Navbar } from '../../components/navbar/Navbar';

import { BoardsList } from '../boards-list/BoardsList';
import { Board } from '../board/Board';
import { Card } from '../card/Card';

export const Layout = () => {
    return (
        <Router>
            <Wrapper>
                <Navbar />

                <Main>
                    <Route path="/board/:id/card/:id" component={Card} />

                    <Switch>
                        <Route path="/" exact component={BoardsList} />
                        <Route path="/board/:id" component={Board} />
                    </Switch>
                </Main>
            </Wrapper>
        </Router>
    );
};
