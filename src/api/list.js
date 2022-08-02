import { DEFAULT_LISTS, STORAGE_KEYS } from '../data/constants';

export const getLists = () => {
    return (
        JSON.parse(localStorage.getItem(STORAGE_KEYS.LISTS)) || DEFAULT_LISTS
    );
};

export const setLists = lists => {
    localStorage.setItem(STORAGE_KEYS.LISTS, JSON.stringify(lists));
};

export const createList = list => {
    const lists = getLists();
    lists.push({ ...list, createdAt: new Date(), updatedAt: new Date() });
    setLists(lists);
};

export const getList = id => getLists().find(l => l.id === id);

export const updateList = list => {
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

export const deleteList = id => setLists(getLists().filter(l => l.id !== id));
