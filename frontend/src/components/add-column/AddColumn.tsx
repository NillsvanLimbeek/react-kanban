import React from 'react';

import { InlineEdit } from '../inline-edit/InlineEdit';

type Props = {
    setColumnTitle: (e: string) => void;
};

export const AddColumn = ({ setColumnTitle }: Props) => {
    return (
        <div>
            <InlineEdit value="" onBlur={setColumnTitle} />
        </div>
    );
};
