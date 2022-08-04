import { IFieldOpts } from '../interfaces/field';

export const getId = (): string => {
    return Math.random().toString();
};

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
