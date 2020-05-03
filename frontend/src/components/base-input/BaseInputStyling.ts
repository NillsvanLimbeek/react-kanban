import styled from 'styled-components';

export const Wrapper = styled.div`
    position: relative;
`;

export const Label = styled.label<{ focus: boolean }>`
    position: absolute;
    left: 6px;
    top: 5px;

    font-size: 1.4rem;
    background: white;
    transition: all 0.2s ease-in-out;
    padding: 0 2.5px;

    color: ${(props) =>
        props.focus
            ? `
            font-size: 1.25rem;
            transform: translateY(-1.75rem);
            transition: all 0.2s ease-in-out;`
            : ''};
`;

export const Input = styled.input`
    padding: 5px 1rem;
    border: 0.25px solid var(--color-grey);
`;
