import { FIELD_OPTS } from "../../../../data/constants";
import { getId } from "../../../../helpers";
import {
  EFieldType,
  IField,
  IFieldConstant,
  IFieldOptions,
} from "../../../../interfaces/field";
import { EInputType } from "../../../../interfaces/input";
import { EButtonType } from "../../../../interfaces/interactions";
import { CheckBox, Input, Select } from "../../../form";
import { IconButton } from "../../../interactive";
import { getFieldOptionConstants } from "./helpers";
import { Wrapper } from "./style";

const Field = ({
  field,
  onFieldChange,
  onOptChange,
  deleteField,
  toggleOptions,
  openFieldId = null,
}: {
  field: IField;
  onFieldChange: Function;
  onOptChange: Function;
  deleteField: Function;
  toggleOptions: Function;
  openFieldId: string | null;
}) => {
  return (
    <Wrapper>
      <div className="field-header">
        <div className="field-name">
          <Input
            type={EInputType.TEXT}
            name="fieldName"
            placeholder="Field Name"
            value={field.fieldName}
            onChange={(name, value) => onFieldChange(field.id, name, value)}
          />
        </div>
        <div className="field-type">
          <Select
            name="fieldType"
            onChange={(name, value) => onFieldChange(field.id, name, value)}
            options={FIELD_OPTS}
            value={field.fieldType}
          />
        </div>
        <div className="field-actions">
          <IconButton
            onClick={(e: Event) => toggleOptions(e, field.id)}
            path={openFieldId === field.id ? "minimize" : "maximize"}
          />
          <IconButton
            type={EButtonType.DESTRUCTIVE}
            onClick={() => deleteField(field.id)}
            path="close"
          />
        </div>
      </div>
      {openFieldId === field.id && (
        <div className="field-options">
          <h6>Options:</h6>
          <>{renderOptions(field, field.fieldType, field.opts, onOptChange)}</>
        </div>
      )}
    </Wrapper>
  );
};

export default Field;

const renderOptions = (
  field: IField,
  key: EFieldType,
  opts: IFieldOptions,
  onOptChange: Function,
) => {
  const constants = getFieldOptionConstants(key);

  return constants.map((c: IFieldConstant) => {
    switch (c.type) {
      case EInputType.CHECKBOX: {
        return (
          <div className="field-option" key={getId()}>
            <CheckBox
              name={c.name}
              label={c.label}
              onChange={(name, value) => onOptChange(field.id, name, value)}
              // TODO: Fix - this isn't going to work for boolean values
              value={opts[c.name] || c.value}
            />
          </div>
        );
      }
      case EInputType.DATE: {
        return (
          <div className="field-option" key={getId()}>
            <Input
              type={EInputType.DATE}
              name={c.name}
              label={c.label}
              onChange={(name, value) => onOptChange(field.id, name, value)}
              // TODO: This isn't going to work for falsy values
              value={opts[c.name] || c.value}
            />
          </div>
        );
      }
      case EInputType.NUMBER: {
        return (
          <div className="field-option" key={getId()}>
            <Input
              type={EInputType.NUMBER}
              name={c.name}
              label={c.label}
              onChange={(name, value) => onOptChange(field.id, name, value)}
              // TODO: This isn't going to work for falsy values
              value={opts[c.name] || c.value}
            />
          </div>
        );
      }
      case EInputType.SELECT: {
        return (
          <div className="field-option" key={getId()}>
            <Select
              type={EInputType.NUMBER}
              name={c.name}
              label={c.label}
              onChange={(name, value) => onOptChange(field.id, name, value)}
              options={c.options}
              // TODO: This isn't going to work for falsy values
              value={opts[c.name] || c.value}
            />
          </div>
        );
      }
      case EInputType.TEXT: {
        return (
          <div className="field-option" key={getId()}>
            <Input
              type={EInputType.TEXT}
              name={c.name}
              label={c.label}
              onChange={(name, value) => onOptChange(field.id, name, value)}
              // TODO: This isn't going to work for falsy values
              value={opts[c.name] || c.value}
            />
          </div>
        );
      }
      default:
        throw new Error("Unknown field type");
    }
  });
};
