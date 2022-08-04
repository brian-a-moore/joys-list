export type InputValue = any;

export interface PInput {
    name: string;
    label?: string;
    placeholder?: string;
    type?: string;
    onChange: (name: string, value: InputValue) => void;
    options?: IOption[];
    value: InputValue;
}

export interface IOption {
    id: string;
    value: string;
    title: string;
}
