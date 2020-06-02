
import cloneDeep from 'clone-deep';
import {
    get,
    writable,
} from 'svelte/store';

import {
    defaultText,
    defaultTheme,
    defaultThemes,
} from 'src/js/defaults';

function writableLocalstorage(key, initialValue) {
    const store = writable(initialValue);
    const {subscribe, set} = store;
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

export const flipView = writable(false);

export const images = writableLocalstorage('images', {});

export const modal = writable(undefined);

export const pages = writable(undefined);

export const pageCounter = writable(0);

export const stringHTMLold = writable('');

export const text = writableLocalstorage('text', defaultText);

export const textarea = writable(undefined);

export const theme = writableLocalstorage('theme', defaultTheme);

export const themes = writable(cloneDeep(defaultThemes));

export const updateAvailable = writable(false);
