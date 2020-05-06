import { css } from 'styled-components';

export const absolute = ({
    yProp = 'top',
    xProp = 'left',
    y = '0',
    x = '0',
} = {}) =>
    css`
        position: absolute;
        ${yProp}: ${y};
        ${xProp}: ${x};
    `;

export const fixed = ({
    yProp = 'top',
    xProp = 'left',
    y = '0',
    x = '0',
} = {}) =>
    css`
        position: fixed;
        ${yProp}: ${y};
        ${xProp}: ${x};
    `;
