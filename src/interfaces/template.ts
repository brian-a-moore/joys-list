import { IField } from './field';

export interface ITemplateBase {
    id: string;
    title: string;
    fields: IField[];
}

export interface ITemplate extends ITemplateBase {
    createdAt: Date;
    updatedAt: Date;
}
