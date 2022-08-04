import { PButton } from "../../../interfaces/interactions";
import { Wrapper } from "./style";

const Button: React.FC<PButton> = ({ children, ...rest }) => {
  return <Wrapper {...rest}>{children}</Wrapper>;
};

export default Button;
