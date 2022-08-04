import { Wrapper } from "./style";

const EmptyText = ({ children }: { children: string }) => {
  return (
    <Wrapper>
      <p>{children}</p>
    </Wrapper>
  );
};

export default EmptyText;
