/**
 * file: Webpack Development setting file
 * date: 2020-07-21
 * author: Frank
 * lastModify: Frank 2020-07-21
 */
const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const EnvironmentPlugin = require('webpack').EnvironmentPlugin;
const devConfig = {
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2,
                            modules: {
                                localIdentName: '[local]',
                            },
                        },
                    },
                    'postcss-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader', 'postcss-loader'],
            },
        ],
    },
    devtool: 'eval-cheap-module-source-map',

    devServer: {
        static: './dist',
        historyApiFallback: true,
        allowedHosts: 'all',
        open: true,
        port: 80,
        client: {
            progress: true,
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            favicon: './public/favicon.ico',
        }),
        new EnvironmentPlugin({ HELLO: 'world' }),
    ],
    optimization: {
        minimizer: [
            new TerserPlugin({
                test: /\.js(\?.*)?$/i,
                parallel: true,
            }),
        ],
        usedExports: true,
        runtimeChunk: 'single',
        splitChunks: {
            chunks: 'all',
        },
    },
    output: {
        filename: '[name].js',
        chunkFilename: '[name].chunk.js',
    },
};
module.exports = (env) => {
    return merge(commonConfig, devConfig);
};
