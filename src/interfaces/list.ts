export interface IListBase {
    id: string;
    title: string;
}

export interface IList extends IListBase {
    createdAt: Date;
    updatedAt: Date;
}
