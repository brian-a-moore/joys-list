import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  createTemplate,
  deleteTemplate,
  getTemplate,
  updateTemplate,
} from "../../../api";
import { DEFAULT_TEMPLATE } from "../../../data/constants";
import { getId } from "../../../helpers";
import { IField, IFieldOptions } from "../../../interfaces/field";
import { InputValue } from "../../../interfaces/input";
import { EButtonType } from "../../../interfaces/interactions";
import { ITemplate } from "../../../interfaces/template";
import { EmptyText } from "../../display";
import { Input } from "../../form";
import { Button } from "../../interactive";
import Field from "./Field";
import { getDefaultField, getDefaultFieldOptions } from "./helpers";
import { Wrapper } from "./style";

const Template = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isNewTemplate = id && id === "new";

  const [template, setTemplate] = useState<ITemplate>(DEFAULT_TEMPLATE);
  const [openFieldId, setOpenFieldId] = useState<string | null>(null);

  useEffect(() => {
    if (!isNewTemplate) {
      const fetchedTemplate = getTemplate(id as string);

      if (fetchedTemplate) {
        setTemplate(fetchedTemplate);
      }
    }
  }, [isNewTemplate, id]);

  const _addField = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();

    setTemplate((prevState) => {
      if (prevState.fields.length >= 10) {
        return prevState;
      }
      return {
        ...prevState,
        fields: [...prevState.fields, getDefaultField(getId())],
      };
    });
  };

  const _deleteField = (id: string) => {
    setTemplate((prevState) => ({
      ...prevState,
      fields: [...prevState.fields].filter((f) => f.id !== id),
    }));
  };

  const _deleteTemplate = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    deleteTemplate(id || template.id);
    navigate(-1);
  };

  const _onCancel = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    navigate(-1);
  };
  const _onChange = (name: string, value: InputValue) => {
    setTemplate((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const _onFieldChange = (
    id: string,
    name: keyof IField,
    value: InputValue,
  ) => {
    setTemplate((prevState) => {
      const fields = [...prevState.fields];
      const index = fields.findIndex((f) => f.id === id);

      if (index > -1) {
        // Update the field value
        fields[index] = {
          ...fields[index],
          [name]: value,
        };

        // Set default field options if the value changed was the field type
        if (name === "fieldType") {
          fields[index].opts = getDefaultFieldOptions(value);
        }
      }

      return { ...prevState, fields };
    });
  };

  // TODO: Fix - Input fields lose focus after each onChange event
  const _onOptChange = (
    id: string,
    name: keyof IFieldOptions,
    value: InputValue,
  ) => {
    setTemplate((prevState) => {
      const fields = [...prevState.fields];
      const index = fields.findIndex((f) => f.id === id);

      if (index > -1) {
        fields[index].opts[name] = value;
      }

      return { ...prevState, fields };
    });
  };

  const _onSubmit = () => {
    try {
      if (isNewTemplate) {
        createTemplate(template);
      } else {
        updateTemplate(template);
      }

      navigate("/templates");
    } catch (e: any | unknown) {
      alert(e.message);
    }
  };

  const _toggleOptions = (e: React.FormEvent<HTMLInputElement>, id: string) => {
    e.preventDefault();
    setOpenFieldId((prevState) => {
      if (prevState === id) return null;
      return id;
    });
  };

  if (template === null) {
    return <Wrapper> Loading... </Wrapper>;
  }

  return (
    <Wrapper>
      <h1>{isNewTemplate ? "New " : "Update "}Template</h1>
      <form onSubmit={_onSubmit}>
        <div className="title-container">
          <Input
            type="text"
            onChange={_onChange}
            name="title"
            placeholder="Template Title"
            value={template.title}
          />
        </div>
        <div className="fields">
          <div className="fields-header">
            <h4>
              Fields <span>({template.fields.length} of 10)</span>
            </h4>
            <Button onClick={_addField} disabled={template.fields.length >= 10}>
              Add Field
            </Button>
          </div>
          {!template.fields.length && (
            <div style={{ marginBottom: "1rem" }}>
              <EmptyText>No Fields</EmptyText>
            </div>
          )}
          {template.fields.map((field) => (
            <Field
              key={field.id}
              field={field}
              onFieldChange={_onFieldChange}
              onOptChange={_onOptChange}
              deleteField={_deleteField}
              toggleOptions={_toggleOptions}
              openFieldId={openFieldId}
            />
          ))}
        </div>
        {!isNewTemplate && (
          <aside className="secondary-actions">
            <Button type={EButtonType.DESTRUCTIVE} onClick={_deleteTemplate}>
              Delete Template
            </Button>
          </aside>
        )}
        <aside className="primary-actions">
          <Button onClick={_onCancel}>Cancel</Button>
          <Button type={EButtonType.AFFIRMATIVE}>
            {isNewTemplate ? "Create " : "Update "} Template
          </Button>
        </aside>
      </form>
    </Wrapper>
  );
};

export default Template;
