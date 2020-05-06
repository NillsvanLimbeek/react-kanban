import { css } from 'styled-components';
import { red, blue, yellow } from '../variables';

export const getColor = (color: string) => {
    let a;

    switch (color) {
        case 'red':
            a = `${red}`;
            break;
        case 'blue':
            a = `${blue}`;
            break;
        case 'yellow':
            a = `${yellow}`;
            break;

        default:
            break;
    }

    return css`
        background-color: ${a};
    `;
};
