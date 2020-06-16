import { cloneDeep } from 'micro-dash';
import {
    get,
    writable,
} from 'svelte/store';

import {
    defaultTheme,
    defaultThemes,
} from '/src/js/defaults';

function writableLocalstorage(key, initialValue) {
    const store = writable(initialValue);
    const { subscribe, set } = store;
    const json = localStorage.getItem(key);
    json && set(JSON.parse(json) || initialValue);

    return {
        set(value) {
            localStorage.setItem(key, JSON.stringify(value));
            set(value);
        },
        update(cb) {
            const value = cb(get(store));
            this.set(value);
        },
        subscribe,
    };
}

export const editor = writable(undefined);

export const images = writableLocalstorage('images', {});

export const informations = writable({
    charactersCounter: 0,
    wordsCounter: 0,
    pageCounter: 0,
});

export const modal = writable(undefined);

export const pages = writable(undefined);

export const processing = writable(false);

export const showPanel = writable(true);

export const stringHTMLold = writable('');

export const theme = writableLocalstorage('theme', defaultTheme);

export const themes = writable(cloneDeep(defaultThemes));

export const updateAvailable = writable(false);
