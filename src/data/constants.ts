import { getId } from '../helpers';
import { IField } from '../interfaces/field';
import { ITemplate } from '../interfaces/template';
export const BUTTON_TYPES = {
    AFFIRMATIVE: 'AFFIRMATIVE',
    DESTRUCTIVE: 'DESTRUCTIVE'
};

export const DEFAULT_FIELD = (id: string): IField => ({
    id,
    fieldName: '',
    fieldType: 'text',
    opts: {
        defaultValue: ''
    }
});

export const DEFAULT_LISTS = [];

export const DEFAULT_OPTS = {
    checkbox: {
        defaultValue: false
    },
    date: {
        defaultValue: undefined,
        dateFormat: 'MM/DD/YYYY',
        allowPastDates: true
    },
    number: {
        defaultValue: undefined,
        allowNegative: true,
        isDollarFormatted: false,
        showCents: true
    },
    text: {
        defaultValue: ''
    }
};

export const DEFAULT_SETTINGS = {
    firstName: 'New User',
    darkMode: false,
    updatedAt: null
};

export const DEFAULT_TEMPLATE = (id: string): ITemplate => ({
    id: getId(),
    title: '',
    fields: [DEFAULT_FIELD(id)]
});

export const DEFAULT_TEMPLATES = [];

export const FIELDS = [
    {
        id: 'checkbox',
        value: 'checkbox',
        title: 'Check Box',
        opts: [
            {
                type: 'checkbox',
                name: 'defaultValue',
                label: 'Default Value',
                value: false
            }
        ]
    },
    {
        id: 'date',
        value: 'date',
        title: 'Date',
        opts: [
            {
                type: 'number',
                name: 'defaultValue',
                placeholder: 'Default Value',
                value: undefined
            },
            {
                type: 'select',
                name: 'dateFormat',
                placeholder: 'Date Format',
                options: [
                    {
                        id: 'MM/DD/YYYY',
                        value: 'MM/DD/YYYY',
                        title: 'MM/DD/YYYY'
                    },
                    {
                        id: 'YYYY/MM/DD',
                        value: 'YYYY/MM/DD',
                        title: 'YYYY/MM/DD'
                    }
                ],
                value: 'MM/DD/YYYY'
            },
            {
                type: 'checkbox',
                name: 'allowPastDates',
                label: 'Allow Dates in Past',
                value: true
            }
        ]
    },
    {
        id: 'number',
        value: 'number',
        title: 'Number',
        opts: [
            {
                type: 'number',
                name: 'defaultValue',
                placeholder: 'Default Value',
                value: undefined
            },
            {
                type: 'checkbox',
                name: 'allowNegative',
                label: 'Allow Negative',
                value: true
            },
            {
                type: 'checkbox',
                name: 'isDollarFormatted',
                label: 'Dollar Format',
                value: true
            },
            {
                type: 'checkbox',
                name: 'showCents',
                label: 'Show Cents',
                value: true
            }
        ]
    },
    {
        id: 'text',
        value: 'text',
        title: 'Text',
        opts: [
            {
                type: 'text',
                name: 'defaultValue',
                placeholder: 'Default Value',
                value: ''
            }
        ]
    }
];

export const STORAGE_KEYS = {
    LISTS: 'JOYS_LIST_LISTS',
    SETTINGS: 'JOYS_LIST_SETTINGS',
    TEMPLATES: 'JOYS_LIST_TEMPLATES'
};
