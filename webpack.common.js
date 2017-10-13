const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: ['babel-polyfill', './src/index.jsx'],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        library: 'PipeTube'
    },
    module: {
        rules: [
            { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader' },
            { test: /\.css$/, exclude: /node_modules/, use: ['style-loader', 'css-loader'] }
        ]
    }
};
