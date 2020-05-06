import { RefObject, useEffect } from 'react';

export function useClickOutside(
    ref: RefObject<HTMLElement>,
    handler: Function,
) {
    useEffect(() => {
        // TODO e type
        const listener = (e: any) => {
            if (!ref.current || ref.current.contains(e.target)) {
                return;
            }

            handler(e);
        };

        document.addEventListener('mousedown', listener);

        return () => {
            document.removeEventListener('mousedown', listener);
        };
    }, [ref, handler]);
}
