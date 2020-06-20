import { get } from 'svelte/store';

import { defaultThemes } from './defaults';
import {
    pages,
    theme as storedTheme,
    themes as storedThemes,
} from './store';

const dictionnary = {
    input: 'checkbox',
    code: 'codespan',
    img: 'image',
    a: 'link',
    p: 'paragraph',
};

const dictionnaryOtherWay = {
    checkbox: 'input',
    codespan: 'code',
    image: 'img',
    link: 'a',
    paragraph: 'p',
};

const list = [
    'a', 'blockquote', 'code', 'del', 'em', 'hr', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'img', 'input', 'li', 'ol', 'page', 'p', 'pre', 'ul', 'strong', 'table', 'td', 'th', 'tr'
];

export const clean = str => str.replace(/\s+/g, ' ').trim();

export const getPre = (element, type) => {
    return type === 'classes' && element === 'page' ? 'first:mt-4 mx-4 mb-4 inline-block break-words ' : '';
};

export const getFromTheme = (element, type, theme) => {
    theme = theme || get(storedTheme);
    return clean(get(storedThemes)[theme][type][element] || '');
};

export const getClasses = (element, theme) => getPre(element, 'classes') + getFromTheme(element, 'classes', theme);

export const getStyles = (element, theme) => getPre(element, 'styles') + getFromTheme(element, 'styles', theme);

const toArray = (str) => clean(str).split(' ');

const addClasses = (element, value) => { value && element.classList.add(...toArray(value)); };

const removeClasses = (element, value) => { value && element.classList.remove(...toArray(value)); };

export const changeTheme = (theme) => {
    const changeClasses = (el, type) => {
        removeClasses(el, getClasses(type, oldTheme));
        addClasses(el, getClasses(type));
    };

    const oldTheme = get(storedTheme);

    if (get(storedThemes)[theme]) {
        storedTheme.set(theme);

        if (get(pages)) {
            list.forEach((type) => {
                get(pages).querySelectorAll(`${type}.marked`).forEach((element) => {
                    changeClasses(element, dictionnary[type] || type);
                    element.setAttribute('style', getStyles(dictionnary[type] || type));
                    if (type === 'pre') {
                        changeClasses(element.firstElementChild, 'code');
                        element.firstElementChild.setAttribute('style', getStyles('code'));
                    }
                });
            });
        }
    }
};

export const updateType = (inputValue, elementType, type) => {
    inputValue = clean(inputValue || '');

    const value = getPre(elementType, type) + inputValue;

    get(pages).querySelectorAll(`${elementType === 'code' ? `pre.marked code` : `${dictionnaryOtherWay[elementType] || elementType}.marked`}`).forEach((element) => {
        if (type === 'classes') {
            removeClasses(element, getClasses(elementType));
            addClasses(element, value);
        } else {
            element.setAttribute('style', value);
        }
    });

    const theme = get(storedTheme);

    // Update value
    get(storedThemes)[theme][type][elementType] = inputValue;

    // Update localStorage
    const json = JSON.parse(localStorage.themes || "{}");
    json[theme] = json[theme] || {};
    json[theme][type] = json[theme][type] || {};
    theme in defaultThemes && inputValue === clean(defaultThemes[theme][type][elementType])
        ? delete json[theme][type][elementType]
        : json[theme][type][elementType] = inputValue;
    localStorage.themes = JSON.stringify(json);
};

export const initializeThemes = () => {
    const themes = get(storedThemes);

    const json = JSON.parse(localStorage.themes || "{}");

    for (const [theme, themeValue] of Object.entries(json)) {
        themes[theme] = themes[theme] || {};
        for (const [type, typeValue] of Object.entries(themeValue)) {
            themes[theme][type] = themes[theme][type] || {};
            for (const [element, elementValue] of Object.entries(typeValue)) {
                themes[theme][type][element] = elementValue;
            }
        }
    }
};

export const createTheme = (basename = 'new', value = { classes: {}, styles: {} }) => {
    const themes = get(storedThemes);

    let name = basename;
    let i = 2;
    while (name in themes) {
        name = `${basename} ${i}`;
        i++;
    }

    themes[name] = value;
    const json = JSON.parse(localStorage.themes || "{}");
    json[name] = value;
    localStorage.themes = JSON.stringify(json);

    storedThemes.set(get(storedThemes));

    changeTheme(name);

    return name;
};

export const deleteTheme = (name) => {
    changeTheme('modern');

    delete get(storedThemes)[name];

    const json = JSON.parse(localStorage.themes);
    json[name] && delete json[name];
    localStorage.themes = JSON.stringify(json);
};

export const renameTheme = (name) => {
    const theme = get(storedTheme);
    const themes = get(storedThemes);

    themes[name] = themes[theme];
    storedTheme.set(name);
    delete themes[theme];

    const json = JSON.parse(localStorage.themes);
    json[name] = json[theme];
    delete json[theme];
    localStorage.themes = JSON.stringify(json);

    storedThemes.set(themes);
};

export const getCurrentTheme = () => {
    return get(storedThemes)[get(storedTheme)];
};

export const getThemes = () => get(storedThemes);
