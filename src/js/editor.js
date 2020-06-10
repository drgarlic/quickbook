import { get } from 'svelte/store';

import { generatePages } from './pages';
import {
    text as storedText,
    textarea as storedTextarea,
} from './store';

export const handleKeydown = (event) => {
    console.log(event.key);

    const textarea = get(storedTextarea);

    let text = textarea.value;
    let start = textarea.selectionStart;
    let end = textarea.selectionEnd;

    const focus = (from, to) => setTimeout(() => {
        textarea.focus();
        textarea.selectionStart = from;
        textarea.selectionEnd = to || from;
    }, 50);

    switch (event.key) {
        case 'Backspace':
            const specialCases = [ '*', '_', '~', '`', '"', '\'' ];
            const charStart = text[start - 1];
            const charEnd = text[end];
            if (charStart === charEnd && specialCases.includes(charStart) && specialCases.includes(charEnd)) {
                text = text.slice(0, start - 1) + text.slice(start, end) + text.slice(end + 1);
                focus(start - 1, end - 1);
                event.preventDefault();
            }
            break;
        case 'Tab':
            event.preventDefault();
            if (start === end) {
                text = text.slice(0, start) + '    ' + text.slice(start);
                focus(start + 4);
            } else {
                const content = text.slice(start, end);
                if (content.includes('\n')) {
                    // text.slice(0, start).lastIndexOf('\n');
                    // text.slice(0, start).lastIndexOf('\n');
                } else {
                    text = text.slice(0, start) + '    ' + text.slice(end);
                    focus(start + 4);
                }
            }
            break;
        case '*':
        case '_':
        case '~':
        case '`':
        case '"':
        case '\'':
            if (start !== end) {
                event.preventDefault();
                text = text.slice(0, start) + event.key + text.slice(start);
                end++;
                text = text.slice(0, end) + event.key + text.slice(end);
                focus(start + 1, end);
            }
            break;
        default:
            textarea.focus();
    };

    storedText.set(text);
};

export const insertText = (insertion, index, options = {}) => {
    const text = get(storedText);

    const { newLine } = options;

    if (newLine) {
        if (text[index - 1] && text[index - 1] !== '\n') { insertion = '\n\n' + insertion;
        } else if (text[index - 2] && text[index - 2] !== '\n') { insertion = '\n' + insertion };
        if (text[index] !== '\n') { insertion += '\n\n';
        } else if (text[index + 1] && text[index + 1] !== '\n') { insertion += '\n' };
    }

    const newTextStart = `${text.slice(0, index)}${insertion}`;
    storedText.set(`${newTextStart}${text.slice(index)}`);

    generatePages();

    setTimeout(() => {
        setSelection(newTextStart.length);
    }, 50);
};

export const setSelection = async (start, end) => {
    end = end || start;
    const textarea = get(storedTextarea);
    textarea.focus();
    textarea.selectionStart = start;
    textarea.selectionEnd = end;
};

// export const updateCursor = async () => {
//     const textarea = get(storedTextarea);
//     const lines = textarea.value.slice(0, textarea.selectionStart).split('\n');
//     const start = lines[lines.length - 1].length;
//     const lineStart = lines.length;
//     const between = textarea.value.slice(textarea.selectionStart, textarea.selectionEnd);
//     const end = start + between.length;
//     const lineEnd = lineStart + between.split('\n').length - 1;

//     cursor.set({
//         start,
//         end,
//         lineStart,
//         lineEnd,
//     });
// };
