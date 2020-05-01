import React from 'react';

import { Wrapper, Label, Icon } from './LabelsStyling';

type Props = {
    labels: string[];
};

export const Labels = ({ labels }: Props) => {
    return (
        <Wrapper>
            {labels.map((label, index) => (
                <Label
                    key={index}
                    style={{ backgroundColor: `var(--color-${label})` }}
                />
            ))}

            <Icon className="fas fa-plus" />
        </Wrapper>
    );
};
