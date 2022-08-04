import styled from "styled-components";

export const Wrapper = styled.div`
  label {
    margin: 0 0 0 1rem;
    height: 2rem;
    line-height: 2rem;
    font-size: 0.9rem;
  }

  .container {
    width: 2rem;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;

    .check-box {
      background: var(--white);
      margin: 0;
      padding: 0;
      width: 1.25rem;
      height: 1.25rem;
      border: none;
      border-radius: 4px;
      cursor: pointer;

      &.checked {
        background: var(--teal-500);
      }
    }
  }
`;
