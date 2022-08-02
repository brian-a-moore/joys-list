import { DEFAULT_TEMPLATES, STORAGE_KEYS } from '../data/constants';

export const getTemplates = () => {
    const templates = JSON.parse(localStorage.getItem(STORAGE_KEYS.TEMPLATES));

    return templates || DEFAULT_TEMPLATES;
};

export const setTemplates = templates => {
    localStorage.setItem(STORAGE_KEYS.TEMPLATES, JSON.stringify(templates));
};

export const createTemplate = template => {
    const templates = getTemplates();
    templates.push({
        ...template,
        createdAt: new Date(),
        updatedAt: new Date()
    });
    setTemplates(templates);
};

export const getTemplate = id => getTemplates().find(t => t.id === id);

export const updateTemplate = template => {
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

export const deleteTemplate = id =>
    setTemplates(getTemplates().filter(t => t.id !== id));
