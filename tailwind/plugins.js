const tailwindUI = require('@tailwindcss/ui');

module.exports = [
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
];
