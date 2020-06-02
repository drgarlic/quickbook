import pako from 'pako';
import {
    encode,
    decode,
} from 'url-safe-base64';

export const compressToArray = str => pako.deflate(str);

export const compressToString = (str) => {
    try {
        return encode(
            window.btoa(
                pako.deflate(
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

export const decompressFromArray = zip => pako.inflate(zip, { to: 'string' });

export const decompressFromString = (zip) => {
    try {
        return pako.inflate(
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
