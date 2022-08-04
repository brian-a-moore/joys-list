import { InputValue, EInputType } from "./input";

export enum EFieldType {
  CHECKBOX = "checkbox",
  DATE = "date",
  NUMBER = "number",
  TEXT = "text",
}

export interface IField {
  id: string;
  fieldName: string;
  fieldType: EFieldType;
  opts: IFieldOptions;
}

export interface IFieldConstant {
  type: EInputType;
  name: keyof IFieldOptions;
  label?: string;
  placeholder?: string;
  options?: InputValue[];
  value: InputValue;
}

export interface IFieldOptions {
  defaultValue: InputValue;
  dateFormat?: "MM/DD/YYYY" | "YYYY/MM/DD";
  allowPastDates?: boolean;
  allowNegative?: boolean;
  isDollarFormatted?: boolean;
  showCents?: boolean;
}
