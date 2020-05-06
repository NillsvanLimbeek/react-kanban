import React, { useState, useRef, useEffect } from 'react';

import { Input } from './InlineEditStyling';

type Props = {
    value: string;
    onBlur: (e: string) => void;
    placeholder?: string;
};

export const InlineEdit = ({ value, onBlur, placeholder }: Props) => {
    const [localValue, setLocalValue] = useState(value);
    const input = useRef<HTMLInputElement>(null);

    useEffect(() => {
        input?.current?.focus();
        input?.current?.select();

        return () => {
            input?.current?.blur();
        };
    }, []);

    const submitOnEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            onBlur(localValue);
        }
    };

    return (
        <Input
            ref={input}
            type="text"
            placeholder={placeholder}
            value={localValue}
            onChange={(e) => setLocalValue(e.currentTarget.value)}
            onBlur={() => onBlur(localValue)}
            onKeyUp={submitOnEnter}
        />
    );
};
