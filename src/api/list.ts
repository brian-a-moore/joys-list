import { DEFAULT_LISTS, STORAGE_KEYS } from '../data/constants';
import { IList } from '../interfaces/list';

export const getLists = (): IList[] => {
    const lists: string = localStorage.getItem(STORAGE_KEYS.LISTS) || '';
    return lists ? JSON.parse(lists) : DEFAULT_LISTS;
};

export const setLists = (lists: IList[]): void => {
    localStorage.setItem(STORAGE_KEYS.LISTS, JSON.stringify(lists));
};

export const createList = (list: IList): void => {
    const lists = getLists();

    lists.push({
        ...list,
        createdAt: new Date(),
        updatedAt: new Date()
    });

    setLists(lists);
};

export const getList = (id: string): IList | null => {
    return getLists().find((l: IList) => l.id === id) || null;
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
    setLists(getLists().filter((l: IList) => l.id !== id));
};
