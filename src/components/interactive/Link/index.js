import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

import { BUTTON_TYPES } from '../../../data/constants';

function Link({ children, ...rest }) {
    return <Wrapper {...rest}>{children}</Wrapper>;
}

export default Link;

const Wrapper = styled(RouterLink)`
    ${props => setColors(props)};
    float: left;
    height: 2rem;
    line-height: 2rem;
    margin: 0;
    padding: 0 1rem;
    border: none;
    border-radius: 4px;
    overflow: hidden;
    font-size: 0.8rem;
    text-transform: uppercase;
    text-decoration: none;

    &:enabled {
        transition: transform 0.25s ease;
        cursor: pointer;
    }

    &:enabled:active {
        transform: scale(0.9);
    }
`;

const setColors = ({ type, disabled }) => {
    if (disabled) {
        return `
            background: var(--gray-200);
            color: var(--gray-400);
            cursor: default;
        `;
    }
    switch (type) {
        case BUTTON_TYPES.AFFIRMATIVE:
            return `
            background: var(--teal-500);
            color: var(--white);

            &:hover {
                background: var(--teal-600);
            }
        `;
        case BUTTON_TYPES.DESTRUCTIVE:
            return `
            background: var(--rose-600);
            color: var(--white);

            &:hover {
                background: var(--rose-700);
            }
        `;
        default:
            return `
            background: var(--white);
            color: var(--gray-600);

            &:hover {
                background: var(--gray-200);
            }
        `;
    }
};
