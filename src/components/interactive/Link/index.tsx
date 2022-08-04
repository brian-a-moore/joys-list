import { PLink } from "../../../interfaces/interactions";
import { Wrapper } from "./style";

const Link: React.FC<PLink> = ({ children, ...rest }) => {
  return <Wrapper {...rest}>{children}</Wrapper>;
};

export default Link;
