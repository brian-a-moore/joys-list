import { Field } from './field';

export interface Template {
    id: string;
    title: string;
    fields?: Field[];
    createdAt?: Date;
    updatedAt?: Date;
}
