import { Icon } from "@mdi/react";

import { PIcon } from "../../../interfaces/interactions";
import { getIcon } from "./helpers";
import { Wrapper } from "./style";

const IconButton: React.FC<PIcon> = ({ children, path, size, ...rest }) => {
  return (
    <Wrapper {...rest}>
      <Icon path={getIcon(path)} size={size || "1rem"} />
    </Wrapper>
  );
};

export default IconButton;
