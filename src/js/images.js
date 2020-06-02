import { get } from 'svelte/store';

import { images } from './store';

export const getUsedImages = (text) => {
    const usedImages = {};

    const imagesMarkdown = text.match(/!\[([^\]]+)]\(([^)]+)\)/g);
    if (imagesMarkdown) {
        imagesMarkdown.forEach((imageMarkdown) => {
            const imageName = imageMarkdown.substring(imageMarkdown.indexOf('(') + 1, imageMarkdown.lastIndexOf(')')).split(' ')[0];
            const data = get(images)[imageName];
            if (data) {
                usedImages[imageName] = data;
            }
        });
    }

    const imagesHTML = text.match(/src="([^"]*)"/g);
    if (imagesHTML) {
        imagesHTML.forEach((imageHTML) => {
            const imageName = imageHTML.substring(imageHTML.indexOf('"') + 1, imageHTML.lastIndexOf('"'));
            const data = get(images)[imageName];
            if (data) {
                usedImages[imageName] = data;
            }
        });
    }

    return usedImages;
}
