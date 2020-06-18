import { get } from 'svelte/store';

import {
    compressToArray,
    compressToString,
} from '/src/js/compressors';
import { getText } from '/src/js/editor';
import { getUsedImages } from '/src/js/images';
import { pages } from '/src/js/store';
import { getCurrentTheme } from '/src/js/themes';

const getData = () => {
    return {
        text: getText(),
        images: getUsedImages(getText()),
        theme: getCurrentTheme(),
    };
};

const download = (href, name) => {
    const link = document.createElement('a');
    link.href = href;
    link.download = name;
    link.click();
};

const downloadBlob = (blob, name) => {
    download(window.URL.createObjectURL(blob), name);
};

export const downloadMarkdown = async () => {
    const blob = new Blob(
        [ getText() ],
        { type: 'text/plain' }
    );
    downloadBlob(blob, 'quickbook.md');
};

export const downloadHTML = async () => {
    const blob = new Blob(
        [ get(pages).innerHTML ],
        { type: 'text/plain' }
    );
    downloadBlob(blob, 'quickbook.html');
};

export const downloadPDF = async () => {
    const body = compressToString(JSON.stringify(getData()));

    const res = await fetch(
        'https://aws.quickbook.io/pdf',
        {
            method: 'POST',
            headers: {
                'Accept': 'application/pdf',
            },
            body,
        }
    );

    const blob = await res.blob();

    downloadBlob(blob, 'quickbook.pdf');
};

export const downloadQuickbook = async () => {
    const compressed = compressToArray(JSON.stringify(getData()));

    const blob = new Blob(
        [ compressed ],
        { type: 'octet/stream' }
    );

    downloadBlob(blob, 'quickbook.qb');
};
