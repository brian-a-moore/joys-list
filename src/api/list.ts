import { DEFAULT_LISTS, STORAGE_KEYS } from "../data/constants";
import { IList } from "../interfaces/list";

/**
 *  Gets all the lists
 * @returns An array of lists
 */
export const getLists = (): IList[] => {
  const lists: string = localStorage.getItem(STORAGE_KEYS.LISTS) || "";
  return lists ? JSON.parse(lists) : DEFAULT_LISTS;
};

/**
 * Saves the updated lists
 * @param lists An array of updated lists to be saved
 */
export const setLists = (lists: IList[]): void => {
  localStorage.setItem(STORAGE_KEYS.LISTS, JSON.stringify(lists));
};

/**
 * Saves a new list
 * @param list New list
 */
export const createList = (list: IList): void => {
  const lists = getLists();

  lists.push({
    ...list,
    createdAt: new Date(),
    updatedAt: new Date(),
  });

  setLists(lists);
};

/**
 * Gets a list by its ID
 * @param id The ID of a list
 * @returns A single list
 */
export const getList = (id: string): IList | null => {
  return getLists().find((l: IList) => l.id === id) || null;
};

/**
 * Saves an updated list
 * @param list An updated list
 */
export const updateList = (list: IList): void => {
  setLists(
    getLists().map((l) => {
      if (l.id === list.id) {
        return { ...list, updatedAt: new Date() };
      } else {
        return l;
      }
    })
  );
};

/**
 * Deletes a list
 * @param id The ID of the list to delete
 */
export const deleteList = (id: string): void => {
  setLists(getLists().filter((l: IList) => l.id !== id));
};
