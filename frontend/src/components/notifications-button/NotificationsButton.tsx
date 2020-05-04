import React from 'react';

import { Bell, Button } from './NotificationsButtonStyling';

export const NotificationsButton = () => {
    return (
        <Button>
            <Bell className="far fa-bell" />
        </Button>
    );
};
