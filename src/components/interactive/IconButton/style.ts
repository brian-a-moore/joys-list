import styled from "styled-components";

import { EButtonType, PIcon } from "../../../interfaces/interactions";

export const Wrapper = styled.button`
  ${(props: PIcon) => setColors(props)};
  width: 2rem;
  height: 2rem;
  margin: 0;
  padding: 0;
  border: none;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  text-transform: uppercase;

  &:enabled {
    transition: transform 0.25s ease;
    cursor: pointer;
  }

  &:enabled:active {
    transform: scale(0.9);
  }
`;

const setColors = ({ type, disabled }: PIcon): string => {
  if (disabled) {
    return `
            background: var(--gray-200);
            color: var(--gray-400);
            cursor: default;
        `;
  }
  switch (type) {
    case EButtonType.AFFIRMATIVE:
      return `
            background: transparent;
            color: var(--gray-500);

            &:hover {
                background: var(--teal-500);
                color: var(--white);
            }
        `;
    case EButtonType.DESTRUCTIVE:
      return `
            background: transparent;
            color: var(--gray-500);

            &:hover {
                background: var(--rose-600);
                color: var(--white);
            }
        `;
    default:
      return `
            background: transparent;
            color: var(--gray-500);

            &:hover {
                background: var(--gray-200);
            }
        `;
  }
};
