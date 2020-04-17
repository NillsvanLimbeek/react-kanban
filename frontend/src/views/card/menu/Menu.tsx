import React from 'react';

import './Menu.scss';

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
        <div className="menu">
            <h4>Add to Card</h4>
            {addActions.map((action, index) => (
                <div className="menu__button" key={index}>
                    <i className={action.icon}></i>
                    <p>{action.title}</p>
                </div>
            ))}

            <h4>Actions</h4>
            {cardActions.map((action, index) => (
                <div className="menu__button" key={index}>
                    <i className={action.icon}></i>
                    <p>{action.title}</p>
                </div>
            ))}
        </div>
    );
};
