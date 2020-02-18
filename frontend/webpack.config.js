const webpack = require('webpack');
const path = require('path');
const HTMLPlugin = require('html-webpack-plugin');
const CleanPlugin = require('clean-webpack-plugin');
const TsConfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = (env = {}) => {
    return {
        entry: path.resolve(__dirname, './src/main.tsx'),
        output: {
            filename: '[hash].js',
            path: path.resolve(__dirname, './dist')
        },
        module: {
            rules: [
                { test: /\.tsx?$/, use: 'ts-loader' }
            ]
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js'],
            plugins: [
                new TsConfigPathsPlugin({
                    configFile: path.resolve(__dirname, './tsconfig.frontend.json')
                })
            ]
        },
        plugins: [
            new CleanPlugin.CleanWebpackPlugin(),
            new HTMLPlugin({
                template: path.resolve(__dirname, './src/index.html'),
                minify: true
            }),
            new webpack.DefinePlugin({
                "process.env.BASEURL": JSON.stringify(env.BASEURL)
            })
        ],
    
    }
}