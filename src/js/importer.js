import { get } from 'svelte/store';

import {
    decompressFromArray,
    decompressFromString,
} from './compressors';
import { defaultText } from './defaults';
import { images } from './store';

export const importData = (data) => {
    let text = localStorage.getItem('text') || defaultText;

    if (data) {
        data = typeof data === 'string' ? decompressFromString(data) : decompressFromArray(data);

        if (data) {
            const json = JSON.parse(data);

            text = json.text || '/!\\ Something was wrong with the passed data.';

            json.images && (images.set({
                ...get(images),
                ...json.images,
            }));
        }
    }

    return text;
}
