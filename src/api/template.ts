import { DEFAULT_TEMPLATES, STORAGE_KEYS } from '../data/constants';
import { Template } from '../interfaces/template';

export const getTemplates = (): Template[] => {
    const templates: string =
        localStorage.getItem(STORAGE_KEYS.TEMPLATES) || '';

    return JSON.parse(templates) || DEFAULT_TEMPLATES;
};

export const setTemplates = (templates: Template[]): void => {
    localStorage.setItem(STORAGE_KEYS.TEMPLATES, JSON.stringify(templates));
};

export const createTemplate = (template: Template): void => {
    const templates = getTemplates();
    templates.push({
        ...template,
        createdAt: new Date(),
        updatedAt: new Date()
    });
    setTemplates(templates);
};

export const getTemplate = (id: string): Template | null => {
    return getTemplates().find((t: Template) => t.id === id) || null;
};

export const updateTemplate = (template: Template): void => {
    setTemplates(
        getTemplates().map(t => {
            if (t.id === template.id) {
                return { ...template, updatedAt: new Date() };
            } else {
                return t;
            }
        })
    );
};

export const deleteTemplate = (id: string): void => {
    return setTemplates(getTemplates().filter((t: Template) => t.id !== id));
};
