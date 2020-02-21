const webpack = require('webpack');
const path = require('path');
const HTMLPlugin = require('html-webpack-plugin');
const CleanPlugin = require('clean-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = (env = {}) => {
    return {
        entry: path.resolve(__dirname, './src/main.tsx'),
        output: {
            filename: '[hash].js',
            path: path.resolve(__dirname, './dist')
        },
        module: {
            rules: [
                { 
                    test: /\.tsx?$/, 
                    loader: 'awesome-typescript-loader',
                    options: {
                        configFileName: path.resolve(__dirname, './tsconfig.frontend.json')
                    }
                }
            ]
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js']
        },
        plugins: [
            new CleanPlugin.CleanWebpackPlugin(),
            new HTMLPlugin({
                template: path.resolve(__dirname, './src/index.html'),
                minify: true
            }),
            new webpack.DefinePlugin({
                "process.env.BASEURL": JSON.stringify(env.BASEURL)
            }),
            new WorkboxPlugin.GenerateSW({
                cleanupOutdatedCaches: true,
                skipWaiting: true,
                include: [
                    /\.css$/,
                    /\.jpeg$/,
                    /\.jpg$/,
                    /\.png/,
                    /\.svg/,

                    /\.tiff$/,
                    /\.woff$/,
                    /\.woff2$/,
                    /\.otf$/,
                    /\.ttf$/,
                ],
                mode: 'production',
                inlineWorkboxRuntime: true,
                runtimeCaching: [{
                    urlPattern: /\.(?:png|jpg|jpeg|svg)$/,
                    handler: 'CacheFirst',
                    options: {
                        cacheName: 'images',
                        expiration: { maxEntries: 100 }
                    }
                }, {
                    urlPattern: /\.(?:css|ttf|otf|woff|woff2)$/,
                    handler: 'CacheFirst',
                    options: {
                        cacheName: 'styles',
                        expiration: { maxEntries: 10 }
                    }
                }]
            }),
            new CopyPlugin([
                { from: path.resolve(__dirname, './src/manifest.json') },
                { from: path.resolve(__dirname, './src/manifest.json'), to: path.resolve(__dirname, './dist/manifest.webmanifest') },
                { from: path.resolve(__dirname, './src/images'), to: path.resolve(__dirname, './dist/images') }
            ])
        ]
    }
}