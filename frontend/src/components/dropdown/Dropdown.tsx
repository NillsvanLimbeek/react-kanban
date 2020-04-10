import React, { useRef, useState, useEffect } from 'react';

import './Dropdown.scss';

type Props = {
    children: React.ReactNode;
    open: boolean;
};

export const Dropdown = ({ children, open }: Props) => {
    const el = useRef<HTMLDivElement>(null);
    const [isOpen, setOpen] = useState(open);

    useEffect(() => {
        isOpen
            ? document.addEventListener('click', handleClickOutside)
            : document.removeEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
            setOpen(false);
        };
    }, [isOpen]);

    const handleClickOutside = (e: any) => {
        console.log('click');

        if (el) {
            console.log(e);

            el.current?.contains(e.target);
            setOpen(false);
        }
    };

    return (
        <div ref={el} className="dropdown">
            {children}
        </div>
    );
};
