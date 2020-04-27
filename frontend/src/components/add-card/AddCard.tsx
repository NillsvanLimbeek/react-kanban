import React, { useRef, useEffect } from 'react';

import './AddCard.scss';

type Props = {
    setTitle: (e: string) => void;
};

export const AddCard = ({ setTitle }: Props) => {
    const textArea = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        textArea.current?.focus();

        return () => {
            textArea?.current?.blur();
        };
    });

    const submitOnBlur = () => {
        if (textArea.current) {
            setTitle(textArea.current.value);
            textArea.current?.blur();
        }
    };

    const submitOnEnter = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter') {
            e.preventDefault();

            if (textArea.current?.value) {
                setTitle(textArea.current.value);
                textArea.current?.blur();
            }
        }
    };

    return (
        <textarea
            ref={textArea}
            className="add-card"
            name="textarea"
            placeholder="Give this card a name..."
            onBlur={submitOnBlur}
            onKeyDown={submitOnEnter}
        ></textarea>
    );
};
