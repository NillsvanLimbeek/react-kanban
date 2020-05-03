import React from 'react';

import { H4, Btn, BtnIcon, BtnP } from './MenuStyling';

// TODO move?
const addActions = [
    { icon: 'far fa-user', title: 'Member' },
    { icon: 'fas fa-tag', title: 'Labels' },
    { icon: 'far fa-check-square', title: 'Checklist' },
    { icon: 'far fa-clock', title: 'Date' },
    { icon: 'fas fa-paperclip', title: 'Attachments' },
    { icon: 'fas fa-tablet-alt', title: 'Cover' },
];

// TODO move?
const cardActions = [
    { icon: 'fas fa-arrow-right', title: 'Move' },
    { icon: 'far fa-copy', title: 'Copy' },
    { icon: 'far fa-eye', title: 'Follow' },
    { icon: 'fas fa-archive', title: 'Archive' },
    { icon: 'far fa-share-square', title: 'Share' },
];

export const Menu = () => {
    return (
        <>
            <H4>Add to Card</H4>
            {addActions.map((action, index) => (
                <Btn key={index}>
                    <BtnIcon className={action.icon} />
                    <BtnP>{action.title}</BtnP>
                </Btn>
            ))}

            <H4>Actions</H4>
            {cardActions.map((action, index) => (
                <Btn key={index}>
                    <BtnIcon className={action.icon} />
                    <BtnP>{action.title}</BtnP>
                </Btn>
            ))}
        </>
    );
};
