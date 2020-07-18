/*eslint @typescript-eslint/no-var-requires:0*/
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base');

module.exports = merge(baseConfig, {
    mode: 'production',
    devtool: 'source-map',
});
