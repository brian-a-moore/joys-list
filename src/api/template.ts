import { DEFAULT_TEMPLATES, STORAGE_KEYS } from '../data/constants';
import { ITemplate } from '../interfaces/template';

export const getTemplates = (): ITemplate[] => {
    const templates: string =
        localStorage.getItem(STORAGE_KEYS.TEMPLATES) || '';

    return templates ? JSON.parse(templates) : DEFAULT_TEMPLATES;
};

export const setTemplates = (templates: ITemplate[]): void => {
    localStorage.setItem(STORAGE_KEYS.TEMPLATES, JSON.stringify(templates));
};

export const createTemplate = (template: ITemplate): void => {
    const templates = getTemplates();
    templates.push({
        ...template,
        createdAt: new Date(),
        updatedAt: new Date()
    });
    setTemplates(templates);
};

export const getTemplate = (id: string): ITemplate | null => {
    return getTemplates().find((t: ITemplate) => t.id === id) || null;
};

export const updateTemplate = (template: ITemplate): void => {
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
    return setTemplates(getTemplates().filter((t: ITemplate) => t.id !== id));
};
