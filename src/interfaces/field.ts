import { InputValue } from './input';

export enum EFieldType {
    CHECKBOX = 'checkbox',
    DATE = 'date',
    NUMBER = 'number',
    TEXT = 'text'
}

export interface IField {
    id: string;
    fieldName: string;
    fieldType: EFieldType;
    opts: IFieldOptions;
}

export interface IFieldConstant {
    type: string;
    name: string;
    label?: string;
    placeholder?: string;
    options?: InputValue[];
    value: InputValue;
}

export interface IFieldOptions {
    defaultValue: InputValue;
    dateFormat?: string;
    allowPastDates?: boolean;
    allowNegative?: boolean;
    isDollarFormatted?: boolean;
    showCents?: boolean;
}
