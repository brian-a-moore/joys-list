import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

import { EButtonTypes, IPropsLink } from '../../../interfaces/interactions';

function Link({ children, ...rest }: { children: string }) {
    return <Wrapper {...rest}>{children}</Wrapper>;
}

export default Link;

const Wrapper = styled(RouterLink)`
    ${(props: IPropsLink) => setColors(props)};
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

const setColors = ({ type, disabled }: IPropsLink): string => {
    if (disabled) {
        return `
            background: var(--gray-200);
            color: var(--gray-400);
            cursor: default;
        `;
    }
    switch (type) {
        case EButtonTypes.AFFIRMATIVE:
            return `
            background: var(--teal-500);
            color: var(--white);

            &:hover {
                background: var(--teal-600);
            }
        `;
        case EButtonTypes.DESTRUCTIVE:
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
