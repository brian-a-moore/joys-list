import styled from "styled-components";

function Empty({ children }: { children: string }) {
  return (
    <Wrapper>
      <p>{children}</p>
    </Wrapper>
  );
}

export default Empty;

const Wrapper = styled.div``;
