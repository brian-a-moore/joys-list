import { DEFAULT_SETTINGS, STORAGE_KEYS } from '../data/constants';
import { Settings } from '../interfaces/settings';

export const getSettings = (): Settings => {
    const settings: string = localStorage.getItem(STORAGE_KEYS.SETTINGS) || '';
    return JSON.parse(settings) || DEFAULT_SETTINGS;
};
export const updateSettings = (updates: Settings) => {
    localStorage.setItem(
        STORAGE_KEYS.SETTINGS,
        JSON.stringify({
            ...getSettings(),
            ...updates,
            updatedAt: new Date()
        })
    );
};
