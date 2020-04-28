import React from 'react';

import { InlineEdit } from '../inline-edit/InlineEdit';

import './AddColumn.scss';

type Props = {
    setColumnTitle: (e: string) => void;
};

export const AddColumn = ({ setColumnTitle }: Props) => {
    return (
        <div className="add-column">
            <InlineEdit
                value=""
                onBlur={setColumnTitle}
                placeholder="Give this column a name..."
            />
        </div>
    );
};
