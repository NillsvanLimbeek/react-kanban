import React, { useState, useEffect } from 'react';

import { Wrapper, Label, Input } from './BaseInputStyling';

type Props = {
    value: string;
    onChange: (e: React.FormEvent<HTMLInputElement>) => void;
    name: string;
    label?: string;
    placeholder?: string;
    className?: string;
};

export const BaseInput = ({
    value,
    onChange,
    name,
    label,
    placeholder,
    className,
}: Props) => {
    const [focus, setFocus] = useState(false);

    useEffect(() => {
        return value.length > 0 || focus ? setFocus(true) : setFocus(false);
    }, [value, focus]);

    return (
        <Wrapper>
            {label && (
                <Label htmlFor="input" focus={focus}>
                    {label}
                </Label>
            )}
            <Input
                type="text"
                name={name}
                placeholder={placeholder}
                value={value}
                className={className}
                onChange={onChange}
                onFocus={() => setFocus(true)}
                onBlur={() => setFocus(false)}
            />
        </Wrapper>
    );
};
