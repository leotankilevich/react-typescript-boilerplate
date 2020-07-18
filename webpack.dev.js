const path = require('path');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const baseConfig = require('./webpack.base');
const { merge } = require('webpack-merge');

module.exports = merge(baseConfig, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        hot: true,
        compress: true,
        port: 9000,
    },
    plugins: [
        new BrowserSyncPlugin(
            {
                host: 'localhost',
                port: 3000,
                proxy: 'http://localhost:9000',
            },
            {
                reload: false,
            },
        ),
    ],
});
