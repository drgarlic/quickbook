// import katex from 'katex';
import {
    cleanUrl,
    escape
} from 'marked/src/helpers';

import {
    getClasses,
    getStyles,
} from './themes';

export const renderer = {
    blockquote(quote) {
        return `<blockquote`
            + ` style="${getStyles('blockquote')}"`
            + ` class="marked ${getClasses('blockquote')}"`
        + `>`
            + quote
        + `</blockquote>\n`;
    },

    checkbox(checked) {
        return `<input`
            + ` style="${getStyles('checkbox')}"`
            + ` class="marked ${getClasses('checkbox')}"`
            + (checked ? ' checked="" ' : '')
            + ` disabled="" type="checkbox"`
            + (this.options.xhtml ? ' /' : '')
        + `> `;
    },

    code(code, infostring, escaped) {
        const lang = (infostring || '').match(/\S*/)[0];

        if (this.options.highlight) {
            const out = this.options.highlight(code, lang);
            if (out !== null && out !== code) {
                escaped = true;
                code = out;
            }
        }

        return `<pre`
            + ` style="${getStyles('pre')}"`
            + ` class="marked ${getClasses('pre')}"`
        + `><code`
            + ` style="${getStyles('code')}"`
            + ` class="${getClasses('code')} ${lang ? (this.options.langPrefix + escape(lang, true)) : 'plaintext'}"`
        + `>`
            + (escaped ? code : escape(code, true))
        + `</code></pre>\n`;
    },

    codespan(text) {
        return `<code`
            + ` style="${getStyles('codespan')}"`
            + ` class="marked ${getClasses('codespan')} plaintext"`
        + `>`
            + text
        + `</code>`;
    },

    del(text) {
        return `<del`
            + ` style="${getStyles('del')}"`
            + ` class="marked ${getClasses('del')}"`
        + `>`
            + text
        + `</del>`;
    },

    em(text) {
        return `<em`
            + ` style="${getStyles('em')}"`
            + ` class="marked ${getClasses('em')}"`
        + `>`
            + text
        + `</em>`;
    },

    heading(text, level) {
        return `<h${level}`
            + ` style="${getStyles('h' + level)}"`
            + ` class="marked ${getClasses('h' + level)}"`
        + `>`
            + text
        + `</h${level}>\n`;
    },

    hr() {
        return `<hr`
        + ` style="${getStyles('hr')}"`
        + ` class="marked ${getClasses('hr')}"`
        + `${this.options.xhtml ? '/' : ''}>\n`;
    },

    image(href, title, text) {
        href = cleanUrl(this.options.sanitize, this.options.baseUrl, href);
        if (href === null) {
            return text;
        }

        return `<img`
        + ` style="${getStyles('image')}"`
        + ` class="marked ${getClasses('image')}"`
        + ` src="${href}"`
        + ` alt="${text}"`
        + ` title="${title || text}"`
        + (this.options.xhtml ? '/>' : '>');
    },

    link(href, title, text) {
        href = cleanUrl(this.options.sanitize, this.options.baseUrl, href);
        if (href === null) {
            return text;
        }
        return `<a`
            + ` style="${getStyles('link')}"`
            + ` class="marked ${getClasses('link')}"`
            + ` href="${escape(href)}"`
            + ` title="${title || href}"`
        + `>`
            + text
        + `</a>`;
    },

    list(body, ordered, start) {
        const type = ordered ? 'ol' : 'ul';
        const startatt = (ordered && start !== 1) ? ` start="${start}"` : ``;

        return `<${type}`
            + startatt
            + ` style="${getStyles(type)}"`
            + ` class="marked ${getClasses(type)}"`
        + `>`
            + body
        + `</${type}>\n`;
    },

    listitem(text) {
        return `<li`
            + ` style="${getStyles('li')}"`
            + ` class="marked ${getClasses('li')}"`
        + `>`
            + text
        + `</li>\n`;
    },

    paragraph(text) {
        return text.trim() === '<pbr></pbr>'
            ? text + '\n'
            : `<p`
                + ` style="${getStyles('paragraph')}"`
                + ` class="marked ${getClasses('paragraph')}"`
            + `>`
                + text.replace(/\n/g, '<br>').trim()
            + `</p>\n`;
    },

    strong(text) {
        return `<strong`
            + ` style="${getStyles('strong')}"`
            + ` class="marked ${getClasses('strong')}"`
        + `>`
            + text
        + `</strong>`;
    },

    table(header, body) {
        return `<table`
            + ` style="${getStyles('table')}"`
            + ` class="marked ${getClasses('table')}"`
        + `>\n`
            + `<thead>${header}</thead>\n`
            + (body ? `<tbody>${body}</tbody>\n` : ``)
        + `</table>\n`;
    },

    tablerow(content) {
        return `<tr`
            + ` style="${getStyles('tr')}"`
            + ` class="marked ${getClasses('tr')}"`
        + `>`
            + content
        + `</tr>\n`;
    },

    tablecell(content, flags) {
        const type = flags.header ? 'th' : 'td';
        return `<${type}`
            + (flags.align ? ` align="${flags.align}"` : '')
            + ` style="${getStyles(type)}"`
            + ` class="marked ${getClasses(type)}"`
        + `>`
            + content
        + `</${type}>\n`;
    },

    text(text) {
        return text.replace(/\n/g, '<br>');
    }
};
