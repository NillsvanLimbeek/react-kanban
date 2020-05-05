import React from 'react';
import { createGlobalStyle } from 'styled-components';

import { BoardsProvider, ColumnsProvider, CardsProvider } from './context';
import { Generic, Reset } from './styling';

import { Layout } from './views/layout/Layout';

const GlobalStyle = createGlobalStyle`
    ${Reset};
    ${Generic};
`;

function App() {
    return (
        <BoardsProvider>
            <ColumnsProvider>
                <CardsProvider>
                    <GlobalStyle />
                    <Layout />
                </CardsProvider>
            </ColumnsProvider>
        </BoardsProvider>
    );
}

export default App;
