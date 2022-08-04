import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 0 0 1rem 0;
  padding: 1rem;
  border: 1px solid var(--gray-200);
  border-radius: 4px;

  .field-header {
    height: 2rem;
    display: flex;

    .field-name {
      padding-right: 1rem;
    }

    .field-name,
    .field-type {
      flex: 1;
    }

    .field-actions {
      display: flex;
      justify-content: space-between;
      width: 5rem;
    }
  }

  .field-options {
    background: var(--gray-100);
    margin: 1rem 0 0 0;
    padding: 1rem;
    padding-bottom: 0;
    border: 1px solid var(--gray-200);
    border-radius: 4px;

    .field-option {
      margin: 0 0 1rem 0;
    }
  }
`;
