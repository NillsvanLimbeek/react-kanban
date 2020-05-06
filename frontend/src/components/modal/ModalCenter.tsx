import React from 'react';

import { Background, Body, Close } from './ModalStyling';

type Props = {
    children: React.ReactNode;
    closeModal: () => void;
};

export const ModalCenter = ({ children, closeModal }: Props) => {
    return (
        <>
            <Body>
                <Close className="fas fa-times" onClick={() => closeModal()} />
                {children}
            </Body>

            <Background onClick={() => closeModal()} />
        </>
    );
};
