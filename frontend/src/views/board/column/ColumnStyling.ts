import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;

    align-self: flex-start;

    width: 20rem;

    padding: 2rem 1.5rem;
    background: var(--color-white);
    border-radius: var(--border-radius);
    box-shadow: 3px 3px 3px 1px rgba(128, 128, 128, 0.25);
    margin-right: 2rem;
`;

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 2.5rem;
`;

export const Icon = styled.i`
    &:first-child {
        color: var(--color-grey-dark);
        font-size: 7.5px;
        margin-right: 7.5px;
    }

    &:last-child {
        padding: 5px;
        color: var(--color-grey-dark);
        font-size: 1rem;
        cursor: pointer;

        &:hover {
            color: var(--color-black);
        }
    }
`;

export const Title = styled.div`
    display: flex;
    align-items: center;

    width: 100%;
`;

export const TitleH4 = styled.h4`
    width: 100%;

    padding: 5px 1rem;
    margin: 0;
    border: 0.25px solid transparent;
    cursor: pointer;
`;

export const ColumnDropdown = styled.div`
    position: relative;
`;

export const Add = styled.button`
    border: none;
    background: transparent;

    text-align: center;
    color: var(--color-grey-dark);
    cursor: pointer;

    &:hover {
        color: var(--color-black);
    }

    &:focus {
        outline: none;
    }
`;
