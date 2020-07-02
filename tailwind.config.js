const defaultTheme = require('tailwindcss/defaultTheme');
const tailwindUI = require('@tailwindcss/ui');

module.exports = {
    purge: [
        './index.html',
        './src/**/*.js',
        './src/**/*.svelte',
    ],
    theme: {
        extend: {
            // colors: {
            //     coal: {
            //         '50': '#f9f9f9',
            //         '100': '#f7f7f7',
            //         '200': '#eaeaea',
            //         '300': '#dbdbdb',
            //         '400': '#b2b2b2',
            //         '500': '#7f7f7f',
            //         '600': '#636363',
            //         '700': '#515151',
            //         '800': '#3f3f3f',
            //         '900': '#2d2d2d',
            //     }
            // },
            borderRadius: {
                xl: '1rem',
                '2xl': '2rem',
                '3xl': '4rem',
            },
            fontFamily: {
                mono: [
                    'Fira Code var',
                    ...defaultTheme.fontFamily.mono,
                ],
                sans: [
                    'Inter var',
                    ...defaultTheme.fontFamily.sans,
                ],
                serif: [
                    'Literata var',
                    ...defaultTheme.fontFamily.serif,
                ],
            },
            fontSize: {
                'sm-em': '.875em',
                '14px': '14px',
                '16px': '16px',
                '7xl': '5rem',
                '8xl': '6rem',
                '9xl': '7rem',
                '10xl': '8rem',
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
            // screens: {
            //     xs: '420px',
            //     dark: {
            //         raw: '(prefers-color-scheme: dark)',
            //     },
            //     light: {
            //         raw: '(prefers-color-scheme: light)',
            //     },
            // },
            zIndex: {
                '-10': '-10',
            }
        },
    },
    variants: {
        backgroundColor: [ 'responsive', 'hover', 'active', 'focus', 'focus-not-active', 'group-hover', 'group-focus', 'even', 'odd' ],
        borderColor: [ 'responsive', 'hover', 'focus', 'active' ],
        borderWidth: [ 'responsive', 'first', 'last', 'not-first', 'not-last' ],
        boxShadow: ['responsive', 'hover', 'focus', 'active', 'group-hover', 'group-focus' ],
        margin: [ 'responsive', 'first', 'last', 'not-first', 'not-last', 'page-parent', 'li-first' ],
        opacity: [ 'responsive', 'hover', 'focus', 'group-hover', 'group-focus' ],
        scale: [ 'responsive', 'hover', 'focus', 'active' ],
        textColor: [ 'responsive', 'hover', 'focus', 'active', 'focus-not-active' ],
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
                {
                    name: 'focus-not-active',
                    rule: 'focus:not(:active)',
                }
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
