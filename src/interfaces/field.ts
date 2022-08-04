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
    opts: IDefaultFieldOption;
}

export interface IFieldConstant {
    type: string;
    name: string;
    label?: string;
    placeholder?: string;
    options?: any[];
    value: any;
}

export interface IDefaultFieldOption {
    defaultValue: any;
    dateFormat?: string;
    allowPastDates?: boolean;
    allowNegative?: boolean;
    isDollarFormatted?: boolean;
    showCents?: boolean;
}
