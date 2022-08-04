import { EFieldType, IField, IFieldOpts } from '../interfaces/field';

export const getId = (): string => {
    return Math.random().toString();
};

export const getDefaultField = (id: string): IField => ({
    id,
    fieldName: '',
    fieldType: EFieldType.text,
    opts: {
        defaultValue: ''
    }
});

export const getDefaultOptions = (key: string): IFieldOpts => {
    switch (key) {
        case 'checkbox':
            return {
                defaultValue: false
            };
        case 'date':
            return {
                defaultValue: undefined,
                dateFormat: 'MM/DD/YYYY',
                allowPastDates: true
            };
        case 'number':
            return {
                defaultValue: undefined,
                allowNegative: true,
                isDollarFormatted: false,
                showCents: true
            };
        case 'text':
            return {
                defaultValue: ''
            };
        default:
            throw new Error('Unknown option type');
    }
};

export const getFieldOpts = (key: string): Object => {
    switch (key) {
        case 'checkbox':
            return [
                {
                    type: 'checkbox',
                    name: 'defaultValue',
                    label: 'Default Value',
                    value: false
                }
            ];
        case 'date':
            return [
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
            ];
        case 'number':
            return [
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
            ];
        case 'text':
            return [
                {
                    type: 'text',
                    name: 'defaultValue',
                    placeholder: 'Default Value',
                    value: ''
                }
            ];
        default:
            throw new Error('Unknown field type');
    }
};
