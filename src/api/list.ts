import { DEFAULT_LISTS, STORAGE_KEYS } from '../data/constants';
import { IListBase, IList } from '../interfaces/list';

export const getLists = (): IList[] => {
    const lists: string = localStorage.getItem(STORAGE_KEYS.LISTS) || '';
    return JSON.parse(lists) || DEFAULT_LISTS;
};

export const setLists = (lists: IList[]): void => {
    localStorage.setItem(STORAGE_KEYS.LISTS, JSON.stringify(lists));
};

export const createList = (list: IListBase): void => {
    const lists = getLists();

    lists.push({
        ...list,
        createdAt: new Date(),
        updatedAt: new Date()
    });

    setLists(lists);
};

export const getList = (id: string): IListBase | null => {
    return getLists().find((l: IListBase) => l.id === id) || null;
};

export const updateList = (list: IList): void => {
    setLists(
        getLists().map(l => {
            if (l.id === list.id) {
                return { ...list, updatedAt: new Date() };
            } else {
                return l;
            }
        })
    );
};

export const deleteList = (id: string): void => {
    setLists(getLists().filter((l: IListBase) => l.id !== id));
};
