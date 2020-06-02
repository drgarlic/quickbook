const defaultTheme = require('tailwindcss/defaultTheme');
const tailwindUI = require('@tailwindcss/ui');

module.exports = {
    purge: false,
    theme: {
        extend: {
            colors: {
                coal: {
                    '50': '#f9f9f9',
                    '100': '#f7f7f7',
                    '200': '#eaeaea',
                    '300': '#dbdbdb',
                    '400': '#b2b2b2',
                    '500': '#7f7f7f',
                    '600': '#636363',
                    '700': '#515151',
                    '800': '#3f3f3f',
                    '900': '#2d2d2d',
                }
            },
            fontFamily: {
                sans: [
                    'Inter var',
                    ...defaultTheme.fontFamily.sans,
                ],
            },
            fontSize: {
                'sm-em': '.875em',
                '14px': '14px',
                '16px': '16px'
            },
            inset: {
                '20': '5rem',
                '-20': '-5rem',
                '22': '5.5rem',
                '-22': '-5.5rem',
                '24': '6rem',
                '-24': '-6rem',
            },
            maxWidth: {
                '1/4': '25%',
                '1/2': '50%',
                '3/4': '75%',
            },
            minWidth: {
                '1/4': '25%',
                '1/2': '50%',
                '3/4': '75%',
            },
            screens: {
                xs: '420px',
                dark: {
                    raw: '(prefers-color-scheme: dark)',
                },
                light: {
                    raw: '(prefers-color-scheme: light)',
                },
            },
            zIndex: {
                '-10': '-10',
            }
        },
    },
    variants: {
        backgroundColor: [ 'responsive', 'hover', 'active', 'focus', 'even', 'odd' ],
        borderWidth: [ 'responsive', 'first', 'last', 'not-first', 'not-last' ],
        boxShadow: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
        margin: [ 'responsive', 'first', 'last', 'not-first', 'not-last', 'page-parent', 'li-first' ],
        opacity: [ 'responsive', 'hover', 'focus', 'group-hover' ],
    },
    plugins: [
        tailwindUI({
            // layout: 'sidebar',
        }),
        function({ addVariant, e }) {
            const variants = [
                {
                    name: 'page-parent',
                    parent: 'page >',
                },
                {
                    name: 'li-first',
                    parent: 'li >',
                    rule: 'first-child',
                },
                {
                    name: 'not-first',
                    rule: 'not(:first-child)',
                },
                {
                    name: 'not-last',
                    rule: 'not(:last-child)',
                },
            ];

            variants.forEach((variant) => {
                addVariant(variant.name, ({ modifySelectors, separator }) => {
                    modifySelectors(({ className }) => {
                        return `${variant.parent ? `${variant.parent} ` : ''}.${e(`${variant.name}${separator}${className}`)}${variant.rule ? `:${variant.rule}` : ''}`;
                    });
                });
            });
        }
    ]
};
