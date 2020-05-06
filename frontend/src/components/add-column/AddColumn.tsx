import React, { useState, useRef, useEffect } from 'react';
import { useClickOutside } from '../../hooks/useClickOutside';

import { Wrapper, Input, Add, P, Icon } from './AddColumnStyling';

type Props = {
    setColumnTitle: (e: string) => void;
};

export const AddColumn = ({ setColumnTitle }: Props) => {
    const [value, setValue] = useState('');
    const input = useRef<HTMLInputElement>(null);
    const element = useRef<HTMLDivElement>(null);

    useClickOutside(element, () => setColumnTitle(''));

    useEffect(() => {
        input.current?.focus();

        return () => {
            input?.current?.blur();
        };
    });

    const submitOnEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            e.preventDefault();

            if (value.length) {
                setColumnTitle(value);
            }
        }
    };

    const onSubmit = (e: any) => {
        !value ? e.preventDefault() : setColumnTitle(value);
    };

    return (
        <Wrapper ref={element}>
            <Input
                ref={input}
                type="text"
                value={value}
                onChange={(e) => setValue(e.currentTarget.value)}
                onKeyDown={submitOnEnter}
                placeholder="Please give this column a name..."
            />

            <Add>
                <P onClick={onSubmit}>Add Column</P>
                <Icon
                    className="fas fa-times"
                    onClick={() => setColumnTitle('')}
                />
            </Add>
        </Wrapper>
    );
};
