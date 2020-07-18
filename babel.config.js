module.exports = function (api) {
    api.cache(true);

    return {
        presets: [
            ['@babel/env', { targets: '> 0.25%', useBuiltIns: 'usage', corejs: { version: '3.6', proposals: true } }],
            '@babel/preset-react',
            ['@babel/preset-typescript', { allExtensions: true, isTSX: true }],
        ],
        plugins: [
            '@babel/plugin-syntax-dynamic-import',
            '@babel/proposal-class-properties',
            '@babel/proposal-object-rest-spread',
            'react-hot-loader/babel',
        ],
    };
};
