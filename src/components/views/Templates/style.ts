import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.section`
  .template-row {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .delete-button {
      width: 2rem;
      height: 100%;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
  }
`;

export const TemplateLink = styled(Link)`
  width: calc(100% - 2rem);
  height: 2rem;
  padding: 0 1rem;
  color: var(--gray-600);
  text-decoration: none;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:hover {
    background: var(--gray-200);
  }

  .title {
    width: calc(100% - 6.1rem);
    padding-right: 1rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  .updated-at {
    width: 6.1rem;
    font-size: 0.6rem;

    strong {
      font-weight: 600;
    }
  }
`;
