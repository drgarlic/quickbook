import { get } from 'svelte/store';

import {
    decompressFromArray,
    decompressFromString,
} from './compressors';
import {
    images,
    text,
} from './store';

export const importData = (data) => {
    if (data) {
        data = typeof data === 'string' ? decompressFromString(data) : decompressFromArray(data);

        if (data) {
            const json = JSON.parse(data);

            text.set(json.text ? json.text : '/!\\ Something was wrong with the passed data.');

            json.images && (images.set({
                ...get(images),
                ...json.images,
            }));
        }
    }
}
