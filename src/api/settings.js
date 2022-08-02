import { DEFAULT_SETTINGS, STORAGE_KEYS } from '../data/constants';

export const getSettings = () => {
    return (
        JSON.parse(localStorage.getItem(STORAGE_KEYS.SETTINGS)) ||
        DEFAULT_SETTINGS
    );
};
export const updateSettings = updates => {
    const settings = {
        ...getSettings(),
        ...updates,
        updatedAt: new Date()
    };
    localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(settings));
};
