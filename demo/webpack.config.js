const path = require('path');
const buildPath = path.resolve(__dirname, 'build');
const srcPath = path.join(__dirname, '..', 'src');

module.exports = {
    entry: path.resolve(__dirname, 'demo-app.js'),
    output: {
        path: buildPath,
        filename: 'demo-app.js',
        publicPath: 'build'
    },
    devServer: {
        contentBase: buildPath
    },
    module: {
        rules: [
            {
                use: 'react-hot-loader/webpack',
                test: __dirname
            },
            {
                use: 'babel-loader',
                test: __dirname
            },
            {
                use: 'babel-loader',
                test: srcPath
            }
        ]
    },
    resolve: {
        alias: {
            'react-carrefour': srcPath
        }
    },
    stats: {
        colors: true
    },
    devtool: 'source-map',
    mode: 'development'
};
