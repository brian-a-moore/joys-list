export type InputValue = any;

export interface PInput {
    name: string;
    label?: string;
    placeholder?: string;
    type?: string;
    onChange: <Type>(name: string, value: InputValue) => Type;
    options?: IOption[];
    value: InputValue;
}

export interface IOption {
    id: string;
    value: string;
    title: string;
}
