import { DEFAULT_SETTINGS, STORAGE_KEYS } from '../data/constants';
import { ISettings } from '../interfaces/settings';

/**
 * Gets the users' settings
 * @returns The current users' settings
 */
export const getSettings = (): ISettings => {
    const settings: string = localStorage.getItem(STORAGE_KEYS.SETTINGS) || '';
    return settings ? JSON.parse(settings) : DEFAULT_SETTINGS;
};

/**
 * Updates the users' settings
 * @param updates Updated settings fields
 */
export const updateSettings = (updates: ISettings) => {
    localStorage.setItem(
        STORAGE_KEYS.SETTINGS,
        JSON.stringify({
            ...getSettings(),
            ...updates,
            updatedAt: new Date()
        })
    );
};
