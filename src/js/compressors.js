import { deflate } from '@intrnl/pako-esm/deflate';
import { inflate } from '@intrnl/pako-esm/inflate';

import {
    encode,
    decode,
} from 'url-safe-base64';

export const compressToArray = str => deflate(str);

export const compressToString = (str) => {
    try {
        return encode(
            window.btoa(
                deflate(
                    str,
                    {
                        to: 'string'
                    }
                )
            )
        )
    } catch {
        return undefined;
    }
};

export const decompressFromArray = zip => inflate(zip, { to: 'string' });

export const decompressFromString = (zip) => {
    try {
        return inflate(
            window.atob(
                decode(
                    zip
                )
            ), {
                to: 'string'
            }
        )
    } catch {
        return undefined;
    }
};
