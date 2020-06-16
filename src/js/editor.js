import ace from 'ace-builds/src-noconflict/ace.js';
import 'ace-builds/src-noconflict/ext-searchbox.js';
import 'ace-builds/src-noconflict/mode-markdown.js';
import { get } from 'svelte/store';

import { importData } from '/src/js/importer';
import { generatePages } from '/src/js/pages';
import {
    editor,
    processing,
} from './store';

export const handleKeydown = (event) => {
//     console.log(event.key);

//     const textarea = get(storedTextarea);

//     let text = textarea.value;
//     let start = textarea.selectionStart;
//     let end = textarea.selectionEnd;

//     const focus = (from, to) => setTimeout(() => {
//         textarea.focus();
//         textarea.selectionStart = from;
//         textarea.selectionEnd = to || from;
//     }, 50);

//     switch (event.key) {
//         case 'Backspace':
//             const specialCases = [ '*', '_', '~', '`', '"', '\'' ];
//             const charStart = text[start - 1];
//             const charEnd = text[end];
//             if (charStart === charEnd && specialCases.includes(charStart) && specialCases.includes(charEnd)) {
//                 text = text.slice(0, start - 1) + text.slice(start, end) + text.slice(end + 1);
//                 focus(start - 1, end - 1);
//                 event.preventDefault();
//             }
//             break;
//         case 'Tab':
//             event.preventDefault();
//             if (start === end) {
//                 text = text.slice(0, start) + '    ' + text.slice(start);
//                 focus(start + 4);
//             } else {
//                 const content = text.slice(start, end);
//                 if (content.includes('\n')) {
//                     // text.slice(0, start).lastIndexOf('\n');
//                     // text.slice(0, start).lastIndexOf('\n');
//                 } else {
//                     text = text.slice(0, start) + '    ' + text.slice(end);
//                     focus(start + 4);
//                 }
//             }
//             break;
//         case '*':
//         case '_':
//         case '~':
//         case '`':
//         case '"':
//         case '\'':
//             if (start !== end) {
//                 event.preventDefault();
//                 text = text.slice(0, start) + event.key + text.slice(start);
//                 end++;
//                 text = text.slice(0, end) + event.key + text.slice(end);
//                 focus(start + 1, end);
//             }
//             break;
//         default:
//             textarea.focus();
//     };

//     storedText.set(text);
};

export const initEditor = (text) => {
    ace.config.set('basePath', '/js/');

    // https://github.com/ajaxorg/ace/wiki/Configuring-Ace
    editor.set(ace.edit('editor', {
        highlightActiveLine: true,
        printMargin: false,
        showFoldWidgets: false,
        showGutter: false,
        showLineNumbers: false,
        theme: 'ace/theme/quickbook',
        value: text,
        wrap: true,
        mode: 'ace/mode/markdown',
    }));

    get(editor).on('change', (e) => {
        processText();
    });

    setTimeout(() => processText(), 1000);
}

export const insertText = (insertion, options = {}) => {
    const text = get(editor).getValue();

    const { newLine } = options;

    if (newLine) {
    //     if (text[index - 1] && text[index - 1] !== '\n') {
    //         insertion = '\n\n' + insertion;
    //     } else if (text[index - 2] && text[index - 2] !== '\n') {
    //         insertion = '\n' + insertion };
    //     if (text[index] !== '\n') {
    //         insertion += '\n\n';
    //     } else if (text[index + 1] && text[index + 1] !== '\n') {
    //         insertion += '\n';
    //     }
    }

    get(editor).session.replace(get(editor).selection.getRange(), insertion);
};

export const processText = async () => {
    localStorage.setItem('text', get(editor).getValue());
    if (! get(processing)) {
        const handle = async () => {
            await generatePages();
            cancelAnimationFrame(id);
            processing.set(false);
        };
        processing.set(true);
        let id = requestAnimationFrame(handle);
    }
};

export const getText = () => get(editor).getValue();

export const setText = (text) => {
    get(editor).setValue(text, -1);
}
