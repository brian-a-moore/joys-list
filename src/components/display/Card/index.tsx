import { Wrapper } from "./style";

const Card = ({ children, ...rest }: { children: JSX.Element }) => {
  return <Wrapper {...rest}>{children}</Wrapper>;
};

export default Card;
