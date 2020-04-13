import React, { useRef, useEffect } from 'react';

import './Dropdown.scss';

type Props = {
    children: React.ReactNode;
    open: boolean;
    onClickOutside: () => void;
};

export const Dropdown = ({ children, open, onClickOutside }: Props) => {
    const el = useRef<HTMLDivElement>(null);

    useEffect(() => {
        open
            ? document.addEventListener('click', handleClickOutside)
            : document.removeEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [open]);

    const handleClickOutside = (e: any) => {
        if (el && !el.current?.contains(e.target)) {
            onClickOutside();
        }
    };

    return (
        <div ref={el} className="dropdown">
            {children}
        </div>
    );
};
