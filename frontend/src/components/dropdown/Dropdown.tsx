import React, { useRef } from 'react';

import { Wrapper } from './DropdownStyling';

import { useClickOutside } from '../../hooks';

type Props = {
    children: React.ReactNode;
    onClickOutside: () => void;
};

export const Dropdown = ({ children, onClickOutside }: Props) => {
    const el = useRef<HTMLDivElement>(null);

    useClickOutside(el, onClickOutside);

    return <Wrapper ref={el}>{children}</Wrapper>;
};
