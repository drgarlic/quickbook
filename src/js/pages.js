import * as diff from 'diff';
import emojiNameMap from 'emoji-name-map';
import katex from 'katex';
import marked from 'marked';
import prismCore from 'prismjs/components/prism-core';
import 'prismjs/plugins/autoloader/prism-autoloader';
prismCore.plugins.autoloader.languages_path = 'https://unpkg.com/prismjs@latest/components/';
import { get } from 'svelte/store';

import { getUsedImages } from './images';
import { renderer } from './renderer';
import {
    editor,
    informations,
    pages as storedPages,
    stringHTMLold,
} from './store';
import {
    getClasses,
    getPre,
    getStyles,
} from './themes';

marked.setOptions({
    smartLists: true,
    smartypants: true
});

export const generatePages = async () => {
    console.time('generation');

    const pages = get(storedPages);

    const text = get(editor).getValue();

    let stringHTML = markdownToHTML(text);

    // console.log(stringHTML);

    const diffs = diff.diffLines(get(stringHTMLold), stringHTML);

    if (pages && (diffs.length > 1 || diffs[0].added || diffs[0].removed)) {
        // Get all elements that didn't change
        const diffStart = diffs[0];
        const diffEnd = diffs[diffs.length - 1];
        const elementsBeforeChanged = ! diffStart.added && ! diffStart.removed ? splitToElements(diffStart.value) : [];
        const elementsAfterChanged = ! diffEnd.added && ! diffEnd.removed ? splitToElements(diffEnd.value, true) : [];

        // Get index of page where the changes starts and get number of elements on the pages before
        let counterElementsBeforePageToChange = 0;
        let startIndexPagesToChange = 0;
        let page = pages.firstElementChild || pages.appendChild(newPage());;
        const getCount = page => page.classList.contains('marked') ? page.childElementCount : 1;
        // console.log('counterElementsBeforePageToChange < elementsBeforeChanged.length', counterElementsBeforePageToChange, elementsBeforeChanged.length);

        // console.log(page);

        while (page.nextSibling && counterElementsBeforePageToChange + getCount(page) <= elementsBeforeChanged.length) {
            counterElementsBeforePageToChange += getCount(page);
            // console.log(counterElementsBeforePageToChange);

            startIndexPagesToChange++;
            page = page.nextSibling;
        }
        // console.log('counterElementsBeforePageToChange', counterElementsBeforePageToChange);
        // console.log('startIndexPagesToChange', startIndexPagesToChange);

        // Get the changes in HTML elements
        const reducer = (accumulator, line) => accumulator + line.length;
        const tmpStringHTML = stringHTML.slice(elementsBeforeChanged.reduce(reducer, 0), stringHTML.length - elementsAfterChanged.reduce(reducer, 0));
        const elementsChangedString = splitToElements(tmpStringHTML);
        // console.log('elementsChangedString', elementsChangedString);

        let elementsChanged = [];
        elementsChangedString.forEach((elementString) => {
            elementString = elementString.substring(elementString.indexOf('<'), elementString.lastIndexOf('>') + 1);
            elementString = replaceEmojis(elementString);
            elementString = replaceLatex(elementString);
            elementString = replaceImages(elementString, text);
            const tmpDiv = document.createElement('div');
            tmpDiv.innerHTML = elementString;
            elementsChanged.push(tmpDiv.firstChild);
        });
        // console.log('elementsChanged', elementsChanged);

        // Prefetch images
        await Promise.all(
            elementsChanged.map(
                async (element) => await Promise.all([...element.querySelectorAll('img')].map(
                    async (img) => {
                        if (img.src.startsWith('http')) {
                            await new Promise((resolve) => {
                                img.onload = () => { resolve() };
                                img.onerror = () => { resolve() };
                            });
                        }
                    }
                ))
            )
        );

        // Init variables
        const startPage = pages.childNodes[startIndexPagesToChange];
        const startIndexChangedElement = elementsBeforeChanged.length - counterElementsBeforePageToChange;
        const numberElementsRemoved = splitToElements(get(stringHTMLold).slice(elementsBeforeChanged.reduce(reducer, 0), get(stringHTMLold).length - elementsAfterChanged.reduce(reducer, 0))).length;

        // Remove old elements
        page = startPage;
        // console.log('numberElementsRemoved', numberElementsRemoved);

        for (let i = 0; i < numberElementsRemoved; i++) {
            if (! page.classList.contains('marked')) {
                page = page.nextSibling || page.parentNode.appendChild(newPage());
                page.parentNode.removeChild(page.previousSibling);
            } else if (page === startPage && page.childElementCount > startIndexChangedElement) {
                page.removeChild(page.children[startIndexChangedElement]);
            } else {
                page.removeChild(page.firstElementChild);
            }
            if (! page.firstElementChild && page.nextSibling) {
                page = page.nextSibling;
                page.parentNode.removeChild(page.previousSibling);
            }
        }
        // console.log('pages.children', pages.children);


        // Add new elements
        ! pages.childNodes[startIndexPagesToChange].classList.contains('marked') && pages.insertBefore(newPage(), pages.childNodes[startIndexPagesToChange]);
        page = pages.childNodes[startIndexPagesToChange];
        elementsChanged.reverse().forEach((element) => element && page.insertBefore(element, page.children[startIndexChangedElement]));
        // console.log('page.children', page.children);

        // Add colors to code blocks
        elementsChanged.forEach(element => element.querySelectorAll('code').forEach((block) => {
            prismCore.highlightElement(block, false);
        }));

        // Spread elements
        console.time('spread');
        spread(page.previousSibling || page);
        console.timeEnd('spread');

        updateInformations();

        stringHTMLold.set(stringHTML);
    }

    console.timeEnd('generation');
};

const markdownToHTML = (text) => {
    text = text.replace(/<pbr>/g, '\n\n<pbr></pbr>\n\n');

    // const regexLists = /\n(-|\*|\+|([0-9]+.)) /g;
    // let matches = [ ...new Set(text.match(regexLists)) ];
    // matches.forEach((match) => {
    //     text = text.replace(new RegExp(match.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), `\n\n${match}`);
    // });

    marked.use({ renderer });
    return marked(text);
};

const replaceEmojis = (text) => {
    const emojiNames = text.match(/:[^(:| |>|<)]*:/g);

    if (emojiNames) {
        emojiNames.forEach((emojiName) => {
            const emoji = emojiNameMap.get(emojiName);
            if (emoji) {
                text = text.replace(emojiName, emoji);
            }
        });
    }

    return text;
};

const replaceLatex = (text) => {
    const handleLatex = (latexString, displayMode) => {
        let newLatexString = latexString.substring(2, latexString.length - 2).replace(/<br>/g, '\n');
        newLatexString = katex.renderToString(newLatexString, {
            displayMode,
            throwOnError: false,
        });
        text = text.replace(latexString, newLatexString);
    }

    let latexStrings;

    latexStrings = text.match(/\$\$[^\$\$]*\$\$/mg);
    latexStrings && latexStrings.forEach(latexString => handleLatex(latexString, true));

    latexStrings = text.match(/\\\$[^\\\$]*\\\$/g);
    // console.log(latexStrings);
    latexStrings && latexStrings.forEach(latexString => handleLatex(latexString, false));

    return text;
};

const replaceImages = (stringHTML, text) => {
    const imagesObject = getUsedImages(text);
    for (const imageName in imagesObject) {
        stringHTML = stringHTML.replace(new RegExp(`src="${imageName}"`, 'g'), `src="${imagesObject[imageName]}"`);
    }
    return stringHTML;
};

// Too slow
const splitToElements = (stringHTML, reverse = false) => {
    console.time('splitToElements');

    const regexElements = /<\/?([a-z]+[0-9]?)?\/?>?/g;
    let elements = [];
    let possible = true;
    let matches;

    const getMatches = () => {
        let matchesHTML = stringHTML.match(regexElements);
        matchesHTML && reverse && matchesHTML.reverse();
        return matchesHTML;
    }

    while (possible && (matches = getMatches())) {
        let counterStart = 0;
        let counterEnd = 0;
        let i = 0;
        let match;

        do {
            match = matches[i];
            if (
                ! match.startsWith('<br')
                && ! match.startsWith('<hr')
                && ! match.startsWith('<input')
                && ! match.startsWith('<textarea')
                && ! match.startsWith('<img')
                && ! match.startsWith('<video')
                && ! match.startsWith('/>')
                && ! match.startsWith('>')
            ) {
                if (match.includes('/')) {
                    counterEnd++;
                } else {
                    counterStart++;
                }
            }
            i++;
        } while (i < matches.length && counterStart !== counterEnd);

        if (counterStart === counterEnd) {
            let toSearch = reverse ? '<' : '>';
            let counterSearch = 1;

            if (counterStart !== 0) {
                toSearch = match;
                counterSearch = matches.slice(0, i).filter(x => x === toSearch).length;
            }

            let toAdd = '';
            for (let i = 0; i < counterSearch; i++) {
                if (reverse) {
                    let indexEnd = stringHTML.lastIndexOf(toSearch);
                    toAdd = stringHTML.slice(indexEnd) + toAdd;
                    stringHTML = stringHTML.slice(0, indexEnd);
                } else {
                    let indexEnd = stringHTML.indexOf(toSearch) + toSearch.length;
                    toAdd += stringHTML.slice(0, indexEnd);
                    stringHTML = stringHTML.slice(indexEnd);
                }
            }
            elements.push(toAdd);
            // elements.push(toAdd.substring(toAdd.indexOf('<'), toAdd.lastIndexOf('>') + 1));
        } else {
            possible = false;
        }
    }
    reverse && elements.reverse();

    console.timeEnd('splitToElements');

    return elements;
}

const newPage = () => {
    const page = document.createElement('page');
    page.classList.value = `marked ${getClasses('page')}`;
    page.setAttribute('style', getStyles('page'));
    return page;
};

const updateInformations = () => {
    const text = get(editor).getValue();
    informations.set({
        charactersCounter: text.replace(/\s+/g, '').length,
        wordsCounter: text.trim().split(/\s+/).filter(x => x !== '').length,
        pageCounter: get(storedPages).children.length,
    });
}

export const spreadAll = () => {
    spread(get(storedPages).firstElementChild, - get(informations).pageCounter);
    updateInformations();
}

// 10 times slower in Chrome than Firefox
const spread = (element, counterNoChange = 0) => {
    const getMaxHeight = element => element.offsetTop + element.offsetHeight - parseFloat(window.getComputedStyle(element).paddingBottom);

    const getLastChildBottom = (element) => {
        if (element && element.lastElementChild) {
            const child =  element.lastElementChild;
            return child.offsetTop + child.offsetHeight;
        } else {
            return 0;
        }
    };

    const isNotValid = (element) => {
        const pbrs = [...element.childNodes].filter(x => x.tagName === 'PBR');
        const pages = [...element.childNodes].filter(x => x.tagName === 'PAGE');
        return (getLastChildBottom(element) > getMaxHeight(element) && element.childNodes.length > 1)
            || pbrs.length > 1
            || (pbrs.length === 1 && element.lastElementChild.tagName !== 'PBR')
            || pages.length > 0;
    };

    const isCustom = element => ! element.classList.contains('marked');

    const hasNoChild = element => ! element.lastElementChild;

    if (isCustom(element)) {
        element.nextSibling && spread(element.nextSibling, counterNoChange);
    } else if (hasNoChild(element) && element.parentNode.childElementCount !== 1) {
        let nextSibling = element.nextSibling;
        element.parentNode.removeChild(element);
        nextSibling && spread(nextSibling, counterNoChange);
    } else if (isNotValid(element)) {
        while (isNotValid(element)) {
            if (element.lastElementChild.tagName === 'PAGE') {
                element.parentNode.insertBefore(element.lastElementChild, element.nextSibling);
                element.nextSibling.classList.value = getPre('page', 'classes') + element.nextSibling.classList;
            } else {
                (! element.nextSibling
                    || isCustom(element.nextSibling)
                    || isNotValid(element.nextSibling)
                ) && element.parentNode.insertBefore(newPage(), element.nextSibling);
                element.nextSibling.prepend(element.lastElementChild);
            }
        }
        hasNoChild(element) ? spread(element, counterNoChange) : spread(element.nextSibling, counterNoChange);
    } else if (element.nextSibling && isCustom(element.nextSibling)) {
        spread(element.nextSibling, counterNoChange);
    } else if (element.nextSibling) {
        let elementsAdded = 0;
        while (! isNotValid(element) && ! hasNoChild(element.nextSibling)) {
            element.append(element.nextSibling.firstElementChild);
            elementsAdded++;
        }
        if (isNotValid(element)) {
            element.nextSibling.prepend(element.lastElementChild);
            elementsAdded--;
        }
        if (elementsAdded !== 0) {
            spread(element.nextSibling, counterNoChange);
        } else if (counterNoChange < 1) {
            spread(element.nextSibling, counterNoChange + 1);
        }
    }
};
