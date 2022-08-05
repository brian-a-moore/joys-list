import { EFieldType, IField, IFieldOptions } from "../../../interfaces/field";

export const getDefaultField = (id: string): IField => ({
  id,
  fieldName: "",
  fieldType: EFieldType.TEXT,
  opts: {
    defaultValue: "",
  },
});

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
