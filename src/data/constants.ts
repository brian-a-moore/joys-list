import { getId } from "../helpers";

export const DEFAULT_LISTS = [];

export const DEFAULT_SETTINGS = {
  firstName: "New User",
  darkMode: false,
  updatedAt: null,
};

export const DEFAULT_TEMPLATE = {
  id: getId(),
  title: "",
  fields: [],
};

export const DEFAULT_TEMPLATES = [];

export enum EFieldType {
  CHECKBOX = "checkbox",
  DATE = "date",
  NUMBER = "number",
  TEXT = "text",
}

export const FIELD_OPTS = [
  {
    id: EFieldType.CHECKBOX,
    value: EFieldType.CHECKBOX,
    title: "Check Box",
  },
  {
    id: EFieldType.DATE,
    value: EFieldType.DATE,
    title: "Date",
  },
  {
    id: EFieldType.NUMBER,
    value: EFieldType.NUMBER,
    title: "Number",
  },
  {
    id: EFieldType.TEXT,
    value: EFieldType.TEXT,
    title: "Text",
  },
];

export const STORAGE_KEYS = {
  LISTS: "JOYS_LIST_LISTS",
  SETTINGS: "JOYS_LIST_SETTINGS",
  TEMPLATES: "JOYS_LIST_TEMPLATES",
};
