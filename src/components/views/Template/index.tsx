import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

import {
  getTemplate,
  createTemplate,
  deleteTemplate,
  updateTemplate,
} from "../../../api";
import { DEFAULT_TEMPLATE } from "../../../data/constants";
import {
  getDefaultField,
  getDefaultFieldOptions,
  getId,
} from "../../../helpers";
import { IField, IFieldOptions } from "../../../interfaces/field";
import { InputValue } from "../../../interfaces/input";
import { EButtonType } from "../../../interfaces/interactions";
import { ITemplate } from "../../../interfaces/template";
import { EmptyText } from "../../display";
import { Input } from "../../form";
import { Button } from "../../interactive";
import Field from "./Field";

function Template() {
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

  /**
   * Adds a new field row to the template and populates it with a default state
   * @param e Event
   */
  const _addField = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();

    setTemplate((prevState) => ({
      ...prevState,
      fields: [...prevState.fields, getDefaultField(getId())],
    }));
  };

  /**
   * Deletes a field from the template
   * @param id The ID of the field
   */
  const _deleteField = (id: string) => {
    setTemplate((prevState) => ({
      ...prevState,
      fields: [...prevState.fields].filter((f) => f.id !== id),
    }));
  };

  /**
   * Deletes the current template and returns to the previous page
   * @param e Event
   */
  const _deleteTemplate = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    deleteTemplate(id || template.id);
    navigate(-1);
  };

  /**
   * Returns to the previous page
   * @param e Event
   */
  const _onCancel = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    navigate(-1);
  };

  /**
   *  Input control for top-level form fields
   * @param name The name of the key being updated in the form
   * @param value The update value
   */
  const _onChange = (name: string, value: InputValue) => {
    setTemplate((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  /**
   *  Input control for field changes
   * @param id The ID for the specific field being updated
   * @param name The name of the key being updated in the field
   * @param value The update value
   */
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

  /**
   * TODO: Fix - Input fields lose focus after each onChange event
   * Input control for field options changes
   * @param id The ID for the specific field being updated
   * @param name The name of the key being updated in the field options
   * @param value The update value
   */
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

  /**
   * Submits the template to either a create or update function
   */
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
        <main>
          <Input
            type="text"
            onChange={_onChange}
            name="title"
            placeholder="Template Title"
            value={template.title}
          />
        </main>
        <section className="fields">
          <h4>Fields ({template.fields.length})</h4>
          <div className="add-field">
            <Button onClick={_addField}>Add Field</Button>
          </div>
          {!template.fields.length && <EmptyText>No Fields</EmptyText>}
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
        </section>
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
}

export default Template;

const Wrapper = styled.section`
  .delete-template {
    margin: 0 0 0 1rem;
  }

  main {
    margin: 0 0 1rem 0;
  }

  .fields {
    position: relative;

    .add-field {
      position: absolute;
      top: 0;
      right: 0;
    }
  }

  .secondary-actions {
  }

  .primary-actions {
    & button + button {
      margin: 0 0 0 1rem;
    }
  }
`;
