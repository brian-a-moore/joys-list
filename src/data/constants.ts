import { getId } from '../helpers';

export const DEFAULT_LISTS = [];

export const DEFAULT_SETTINGS = {
    firstName: 'New User',
    darkMode: false,
    updatedAt: null
};

export const DEFAULT_TEMPLATE = {
    id: getId(),
    title: '',
    fields: []
};

export const DEFAULT_TEMPLATES = [];

export const FIELD_OPTS = [
    {
        id: 'checkbox',
        value: 'checkbox',
        title: 'Check Box'
    },
    {
        id: 'date',
        value: 'date',
        title: 'Date'
    },
    {
        id: 'number',
        value: 'number',
        title: 'Number'
    },
    {
        id: 'text',
        value: 'text',
        title: 'Text'
    }
];

export const STORAGE_KEYS = {
    LISTS: 'JOYS_LIST_LISTS',
    SETTINGS: 'JOYS_LIST_SETTINGS',
    TEMPLATES: 'JOYS_LIST_TEMPLATES'
};
