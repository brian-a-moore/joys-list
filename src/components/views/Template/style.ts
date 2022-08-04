import styled from "styled-components";

export const Wrapper = styled.section`
  .title-container {
    width: 100%;
    max-width: 30rem;
    margin: 0 0 1rem 0;
  }

  .fields {
    width: 100%;
    .fields-header {
      margin: 0 0 1rem 0;
      height: 2rem;
      display: flex;
      align-items: center;
      justify-content: space-between;

      h4 {
        margin: 0;
        height: 2rem;
        line-height: 2rem;

        span {
          display: inline-block;
          opacity: 0.5;
          transform: scale(0.8);
        }
      }
    }
  }

  .secondary-actions {
    float: left;
  }

  .primary-actions {
    float: right;

    & button + button {
      margin: 0 0 0 1rem;
    }
  }
`;
