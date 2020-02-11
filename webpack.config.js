const webpack = require('webpack');
const path = require('path');
const HTMLPlugin = require('html-webpack-plugin');
const CleanPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: './frontend/src/main.tsx',
    output: {
        filename: '[hash].js',
        path: path.resolve(__dirname, 'frontend/dist')
    },
    module: {
        rules: [
            { test: /\.tsx?$/, use: 'ts-loader' }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    plugins: [
        new CleanPlugin.CleanWebpackPlugin(),
        new HTMLPlugin({
            template: path.resolve(__dirname, 'frontend/src/index.html'),
            minify: true
        })
    ]
}