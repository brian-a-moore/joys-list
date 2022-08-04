import styled from "styled-components";

function Empty({ children }: { children: string }) {
  return (
    <Wrapper>
      <p>{children}</p>
    </Wrapper>
  );
}

export default Empty;

const Wrapper = styled.div`
  background: var(--gray-100);
  float: left;
  width: 100%;
  text-align: center;
  margin: 0 0 1rem 0;
  padding: 1rem;
  border-radius: 4px;

  p {
    margin: 0;
    padding: 0;
    color: var(--gray-400);
    font-size: 0.9rem;
    font-style: italic;
  }
`;
