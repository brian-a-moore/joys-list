import { EFieldType, IFieldConstant } from "../../../../interfaces/field";
import { EInputType } from "../../../../interfaces/input";

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
