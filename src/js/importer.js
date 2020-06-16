import { get } from 'svelte/store';
import { isEqual } from 'micro-dash';

import {
    decompressFromArray,
    decompressFromString,
} from './compressors';
import { defaultText } from './defaults';
import { setText } from './editor';
import { images } from './store';
import {
    getThemes,
    changeTheme,
    createTheme,
} from './themes';

export const importData = (data) => {
    let text = localStorage.getItem('text') || defaultText;

    if (data) {
        data = typeof data === 'string' ? decompressFromString(data) : decompressFromArray(data);

        if (data) {
            const json = JSON.parse(data);

            text = json.text || text;

            json.images && (images.set({
                ...get(images),
                ...json.images,
            }));

            if (json.theme) {
                let themes = getThemes();
                let theme;
                if (themes) {
                    for (let [key, value] of Object.entries(themes)) {
                        if (isEqual(json.theme, value)) {
                            theme = key;
                        }
                    }
                }
                console.log(theme);

                theme ? changeTheme(theme) : createTheme('imported', json.theme);
            }
        }
    }

    return text;
};

export const importFile = async (file) => {
    const extension = file.name.split('.').pop();
    if (extension === 'md') {
        setText(await file.text());
    } else {
        const buffer = await file.arrayBuffer();
        const data = new Uint8Array(buffer);
        setText(importData(data));
    }
};
