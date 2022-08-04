import styled from "styled-components";
import { Icon } from "@mdi/react";
import {
  mdiDelete,
  mdiCloseCircle,
  mdiChevronUp,
  mdiChevronDown,
} from "@mdi/js";

import { EButtonType, PIcon } from "../../../interfaces/interactions";

const getIcon = (path: string) => {
  switch (path) {
    case "close":
      return mdiCloseCircle;
    case "delete":
      return mdiDelete;
    case "maximize":
      return mdiChevronDown;
    case "minimize":
      return mdiChevronUp;
    default:
      return "";
  }
};

function IconButton({ path, size, ...rest }: PIcon) {
  return (
    <Wrapper {...rest}>
      <Icon path={getIcon(path)} size={size || "1rem"} />
    </Wrapper>
  );
}

export default IconButton;

const Wrapper = styled.button`
  ${(props: PIcon) => setColors(props)};
  float: left;
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
