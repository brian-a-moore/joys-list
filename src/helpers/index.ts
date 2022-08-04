import {
    EFieldType,
    IField,
    IFieldOption,
    IDefaultFieldOption
} from '../interfaces/field';

export const getId = (): string => {
    return Math.random().toString();
};

export const getDefaultField = (id: string): IField => ({
    id,
    fieldName: '',
    fieldType: EFieldType.TEXT,
    opts: {
        defaultValue: ''
    }
});

export const getDefaultFieldOptions = (key: string): IDefaultFieldOption => {
    switch (key) {
        case EFieldType.CHECKBOX:
            return {
                defaultValue: false
            };
        case EFieldType.DATE:
            return {
                defaultValue: undefined,
                dateFormat: 'MM/DD/YYYY',
                allowPastDates: true
            };
        case EFieldType.NUMBER:
            return {
                defaultValue: undefined,
                allowNegative: true,
                isDollarFormatted: false,
                showCents: true
            };
        case EFieldType.TEXT:
            return {
                defaultValue: ''
            };
        default:
            throw new Error('Unknown option type');
    }
};

export const getFieldOptions = (key: string): IFieldOption[] => {
    switch (key) {
        case EFieldType.CHECKBOX:
            return [
                {
                    type: EFieldType.CHECKBOX,
                    name: 'defaultValue',
                    label: 'Default Value',
                    value: false
                }
            ];
        case EFieldType.DATE:
            return [
                {
                    type: EFieldType.NUMBER,
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
                    type: EFieldType.CHECKBOX,
                    name: 'allowPastDates',
                    label: 'Allow Dates in Past',
                    value: true
                }
            ];
        case EFieldType.NUMBER:
            return [
                {
                    type: EFieldType.NUMBER,
                    name: 'defaultValue',
                    placeholder: 'Default Value',
                    value: undefined
                },
                {
                    type: EFieldType.CHECKBOX,
                    name: 'allowNegative',
                    label: 'Allow Negative',
                    value: true
                },
                {
                    type: EFieldType.CHECKBOX,
                    name: 'isDollarFormatted',
                    label: 'Dollar Format',
                    value: true
                },
                {
                    type: EFieldType.CHECKBOX,
                    name: 'showCents',
                    label: 'Show Cents',
                    value: true
                }
            ];
        case EFieldType.TEXT:
            return [
                {
                    type: EFieldType.TEXT,
                    name: 'defaultValue',
                    placeholder: 'Default Value',
                    value: ''
                }
            ];
        default:
            throw new Error('Unknown field type');
    }
};
