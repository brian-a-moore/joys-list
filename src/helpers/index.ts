import {
  EFieldType,
  IField,
  IFieldConstant,
  IFieldOptions,
} from "../interfaces/field";
import { EInputType } from "../interfaces/input";

/**
 * Generate a unique ID
 * @returns an ID string
 */
export const getId = (): string => {
  return Math.random().toString();
};

/**
 * Returns a default field
 * @param id A unique ID
 * @returns Default field
 */
export const getDefaultField = (id: string): IField => ({
  id,
  fieldName: "",
  fieldType: EFieldType.TEXT,
  opts: {
    defaultValue: "",
  },
});

/**
 * Get the default field option values by field type
 * @param key Key of a field type
 * @returns Default field options
 */
export const getDefaultFieldOptions = (key: EFieldType): IFieldOptions => {
  switch (key) {
    case EFieldType.CHECKBOX:
      return {
        defaultValue: false,
      };
    case EFieldType.DATE:
      return {
        defaultValue: undefined,
        dateFormat: "MM/DD/YYYY",
        allowPastDates: true,
      };
    case EFieldType.NUMBER:
      return {
        defaultValue: undefined,
        allowNegative: true,
        isDollarFormatted: false,
        showCents: true,
      };
    case EFieldType.TEXT:
      return {
        defaultValue: "",
      };
    default:
      throw new Error("Unknown option type");
  }
};

/**
 * Get the values necessary to build the field option form based on the field type
 * @param key Key of a field type
 * @returns Field option constants
 */
export const getFieldOptionConstants = (key: EFieldType): IFieldConstant[] => {
  switch (key) {
    case EFieldType.CHECKBOX:
      return [
        {
          type: EInputType.CHECKBOX,
          name: "defaultValue",
          label: "Default Value",
          value: false,
        },
      ];
    case EFieldType.DATE:
      return [
        {
          type: EInputType.NUMBER,
          name: "defaultValue",
          placeholder: "Default Value",
          value: undefined,
        },
        {
          type: EInputType.SELECT,
          name: "dateFormat",
          placeholder: "Date Format",
          options: [
            {
              id: "MM/DD/YYYY",
              value: "MM/DD/YYYY",
              title: "MM/DD/YYYY",
            },
            {
              id: "YYYY/MM/DD",
              value: "YYYY/MM/DD",
              title: "YYYY/MM/DD",
            },
          ],
          value: "MM/DD/YYYY",
        },
        {
          type: EInputType.CHECKBOX,
          name: "allowPastDates",
          label: "Allow Dates in Past",
          value: true,
        },
      ];
    case EFieldType.NUMBER:
      return [
        {
          type: EInputType.NUMBER,
          name: "defaultValue",
          placeholder: "Default Value",
          value: undefined,
        },
        {
          type: EInputType.CHECKBOX,
          name: "allowNegative",
          label: "Allow Negative",
          value: true,
        },
        {
          type: EInputType.CHECKBOX,
          name: "isDollarFormatted",
          label: "Dollar Format",
          value: true,
        },
        {
          type: EInputType.CHECKBOX,
          name: "showCents",
          label: "Show Cents",
          value: true,
        },
      ];
    case EFieldType.TEXT:
      return [
        {
          type: EInputType.TEXT,
          name: "defaultValue",
          placeholder: "Default Value",
          value: "",
        },
      ];
    default:
      throw new Error("Unknown field type");
  }
};
