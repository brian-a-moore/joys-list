import { useEffect, useState } from "react";
import { deleteTemplate, getTemplates } from "../../../api";
import { getDate } from "../../../helpers";
import { EButtonType } from "../../../interfaces/interactions";
import { ITemplate } from "../../../interfaces/template";
import { Card, EmptyText } from "../../display";
import { IconButton, Link } from "../../interactive";
import { TemplateLink, Wrapper } from "./style";

const Templates = () => {
  const [templates, setTemplates] = useState<ITemplate[] | null>(null);

  useEffect(() => {
    setTemplates(getTemplates());
  }, []);

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
                  onClick={() => _onDelete(t.id)}
                  path="delete"
                />
              </div>
            ))}
          </>
        )}
      </Card>
      <div style={{ float: "right" }}>
        <Link type={EButtonType.AFFIRMATIVE} to="/template/new">
          New Template
        </Link>
      </div>
    </Wrapper>
  );
};

export default Templates;
