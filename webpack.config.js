/* global __dirname */
var path = require('path');
var srcDir = path.resolve(__dirname, 'src');
var ubildDir = path.resolve(__dirname, 'dist');

module.exports = {
    entry: path.resolve(srcDir, 'index.js'),
    output: {
        path: ubildDir
    },
    module: {
        rules: [
            {
                use: 'react-hot-loader/webpack',
                test: srcDir,
            },
            {
                use: 'babel-loader',
                test: srcDir,
            },
        ],
    },
    externals: [
        {
            react: {
                root: 'React',
                amd: 'react',
                commonjs: 'react',
                commonjs2: 'react',
            },
        },
    ],
    stats: {
        colors: true,
    }
};
