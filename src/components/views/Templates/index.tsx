import { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import styled from "styled-components";

import { deleteTemplate, getTemplates } from "../../../api";
import { getDate } from "../../../helpers";
import { EButtonType } from "../../../interfaces/interactions";
import { ITemplate } from "../../../interfaces/template";
import { Card, EmptyText } from "../../display";
import { IconButton, Link } from "../../interactive";

function Templates() {
  const [templates, setTemplates] = useState<ITemplate[] | null>(null);

  useEffect(() => {
    setTemplates(getTemplates());
  }, []);

  /**
   * Deletes a template
   * @param id The Id of a template
   */
  const _onDelete = (id: string) => {
    deleteTemplate(id);
    setTemplates(getTemplates());
  };

  return (
    <Wrapper>
      <h1>Templates</h1>
      <Card>
        {templates === null ? (
          <p> Loading...</p>
        ) : !templates.length ? (
          <EmptyText>No Templates</EmptyText>
        ) : (
          <Mapper templates={templates} onDelete={_onDelete} />
        )}
      </Card>
      <div style={{ float: "right" }}>
        <Link type={EButtonType.AFFIRMATIVE} to="/template/new">
          New Template
        </Link>
      </div>
    </Wrapper>
  );
}

const Mapper = ({
  templates,
  onDelete,
}: {
  templates: ITemplate[];
  onDelete: Function;
}) => {
  return (
    <>
      {templates.map((t) => (
        <div key={t.id} className="template-row">
          <TemplateLink to={`/template/${t.id}`}>
            <p className="title">{t.title}</p>
            {t.updatedAt && (
              <p className="updated-at">
                <strong>Updated:</strong> {getDate(t.updatedAt)}
              </p>
            )}
          </TemplateLink>
          <IconButton
            type={EButtonType.DESTRUCTIVE}
            onClick={() => onDelete(t.id)}
            path="delete"
          />
        </div>
      ))}
    </>
  );
};

export default Templates;

const Wrapper = styled.section`
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

const TemplateLink = styled(RouterLink)`
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
