const webpack = require('webpack');
const path = require('path');
const HTMLPlugin = require('html-webpack-plugin');
const CleanPlugin = require('clean-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const BundleAnalyzer = require('webpack-bundle-analyzer');

module.exports = (env = {}) => {
    return {
        entry: {
            main: path.resolve(__dirname, './src/main.tsx')
        },
        output: {
            filename: '[hash].js',
            chunkFilename: 'vendor.js',
            path: path.resolve(__dirname, './dist'),
            hashDigestLength: 8
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
        optimization: {
            splitChunks: {
                chunks: 'all'
            }
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
                "process.env.BASEURL": JSON.stringify(env.BASEURL),
                "process.env.SSR": false
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

                    /vendor.js$/
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
                }, {
                    urlPattern: /vendor.js$/,
                    handler: 'CacheFirst',
                    options: {
                        cacheName: 'vendor',
                        expiration: { maxEntries: 1 }
                    }
                }]
            }),
            new CopyPlugin([
                { from: path.resolve(__dirname, './src/manifest.json') },
                { from: path.resolve(__dirname, './src/manifest.json'), to: path.resolve(__dirname, './dist/manifest.webmanifest') },
                { from: path.resolve(__dirname, './src/images'), to: path.resolve(__dirname, './dist/images') }
            ]),
            new BundleAnalyzer.BundleAnalyzerPlugin({
                analyzerMode: 'static',
                reportFilename: '../report/report.html'
            })
        ]
    }
}