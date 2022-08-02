export interface IFieldConstant {
    id: EFieldType;
    value: EFieldType;
    title: string;
    opts: IFieldConstantOpts;
}

export interface IFieldConstantOpts {
    type: string;
    name: string;
    label?: string;
    placeholder?: string;
    options?: any[];
    value: any;
}

export interface IField {
    id: string;
    fieldName: string;
    fieldType: EFieldType;
    opts: IFieldOpts;
}

export interface IFieldOpts {
    defaultValue: any;
    dateFormat?: string;
    allowPastDates?: boolean;
    allowNegative?: boolean;
    isDollarFormatted?: boolean;
    showCents?: boolean;
}

export enum EFieldType {
    checkbox = 'checkbox',
    date = 'date',
    number = 'number',
    text = 'text'
}
