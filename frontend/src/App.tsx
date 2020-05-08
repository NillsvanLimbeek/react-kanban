import React from 'react';
import { createGlobalStyle } from 'styled-components';

import {
    BoardsProvider,
    ColumnsProvider,
    CardsProvider,
    AuthProvider,
} from './context';
import { Generic, Reset } from './styling';

import { Layout } from './views/layout/Layout';

const GlobalStyle = createGlobalStyle`
    ${Reset};
    ${Generic};
`;

function App() {
    return (
        <AuthProvider>
            <BoardsProvider>
                <ColumnsProvider>
                    <CardsProvider>
                        <GlobalStyle />
                        <Layout />
                    </CardsProvider>
                </ColumnsProvider>
            </BoardsProvider>
        </AuthProvider>
    );
}

export default App;
