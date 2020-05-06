import React from 'react';

import { Background, Body, Close } from './SideMenuStyling';

type Props = {
    children: React.ReactNode;
    closeSideMenu: () => void;
};

export const SideMenu = ({ children, closeSideMenu }: Props) => {
    return (
        <div className="side-menu">
            <Body>
                <Close
                    className="fas fa-times"
                    onClick={() => closeSideMenu()}
                />
                {children}
            </Body>

            <Background />
        </div>
    );
};
