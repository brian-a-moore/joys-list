import { IField } from './field';

export interface ITemplate {
    id: string;
    title: string;
    fields: IField[];
    createdAt?: Date;
    updatedAt?: Date;
}
