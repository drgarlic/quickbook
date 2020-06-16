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
    }
};

const download = (blob, name) => {
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = name;
    link.click();
};

export const downloadMarkdown = async () => {
    const blob = new Blob(
        [ getText() ],
        { type: 'text/plain' }
    );
    download(blob, 'quickbook.md');
};

export const downloadHTML = async () => {
    const blob = new Blob(
        [ get(pages).innerHTML ],
        { type: 'text/plain' }
    );
    download(blob, 'quickbook.html');
};

export const downloadQuickbook = async () => {
    const compressed = compressToArray(JSON.stringify(getData()));

    const blob = new Blob(
        [ compressed ],
        { type: 'octet/stream' }
    );
    download(blob, 'quickbook.qb');
};

// const downloadPDF = async () => {
//     const body = compressToString(JSON.stringify(getData()));

//     const res = await fetch(
//         `${window.location.origin}/api/pdf`,
//         {
//             method: 'POST',
//             headers: { 'Accept': 'application/pdf' },
//             body,
//         }
//     );

//     const data = await res.arrayBuffer();

//     const blob = new Blob(
//         [ data ],
//         { type: 'application/pdf' }
//     );

//     download(blob, 'quickbook.pdf');
// }
