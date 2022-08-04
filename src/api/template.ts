import { DEFAULT_TEMPLATES, STORAGE_KEYS } from "../data/constants";
import { ITemplate } from "../interfaces/template";

/**
 *  Gets all the templates
 * @returns An array of templates
 */
export const getTemplates = (): ITemplate[] => {
  const templates: string = localStorage.getItem(STORAGE_KEYS.TEMPLATES) || "";

  return templates ? JSON.parse(templates) : DEFAULT_TEMPLATES;
};

/**
 * Saves the updated templates
 * @param templates An array of updated templates to be saved
 */
export const setTemplates = (templates: ITemplate[]): void => {
  localStorage.setItem(STORAGE_KEYS.TEMPLATES, JSON.stringify(templates));
};

/**
 * Saves a new template
 * @param template New template
 */
export const createTemplate = (template: ITemplate): void => {
  const templates = getTemplates();
  templates.push({
    ...template,
    createdAt: new Date(),
    updatedAt: new Date(),
  });
  setTemplates(templates);
};

/**
 * Gets a template by its ID
 * @param id The ID of a template
 * @returns A single template
 */
export const getTemplate = (id: string): ITemplate | null => {
  return getTemplates().find((t: ITemplate) => t.id === id) || null;
};

/**
 * Saves an updated template
 * @param template An updated template
 */
export const updateTemplate = (template: ITemplate): void => {
  setTemplates(
    getTemplates().map((t) => {
      if (t.id === template.id) {
        return { ...template, updatedAt: new Date() };
      } else {
        return t;
      }
    })
  );
};

/**
 * Deletes a template
 * @param id The ID of the template to delete
 */
export const deleteTemplate = (id: string): void => {
  return setTemplates(getTemplates().filter((t: ITemplate) => t.id !== id));
};
