const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
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
};
