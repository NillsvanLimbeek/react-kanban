import React from 'react';

import './Labels.scss';

type Props = {
    labels: string[];
};

export const Labels = ({ labels }: Props) => {
    return (
        <div className="labels">
            {labels.map((label, index) => (
                <div
                    key={index}
                    className="labels__label"
                    style={{ backgroundColor: `var(--color-${label})` }}
                />
            ))}

            <i className="labels__add fas fa-plus"></i>
        </div>
    );
};
