import React from 'react';

import { Button, Img, Text } from './UserButtonStyling';

export const UserButton = () => {
    return (
        <Button>
            <Img
                src="https://randomuser.me/api/portraits/men/75.jpg"
                alt="UserAvatar"
            />

            <Text>Hello Nills!</Text>
        </Button>
    );
};
