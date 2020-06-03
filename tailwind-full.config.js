const theme = require('./tailwind/theme');
const variants = require('./tailwind/variants');
const plugins = require('./tailwind/plugins');

module.exports = {
    purge: false,
    theme,
    variants,
    plugins
};
