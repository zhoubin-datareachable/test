/**
 * file: Webpack Common File
 * date: 2020-07-21
 * author: Frank
 * lastModify: Frank 2020-07-21
 */
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const webpack = require('webpack');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
    entry: {
        main: path.resolve(__dirname, '../src/index.tsx'),
    },
    resolve: {
        alias: {
            '~': path.resolve(__dirname, '../src/'),
        },
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    module: {
        rules: [
            {
                test: /\.js$|.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.ts$|.tsx?$/,
                use: [
                    { loader: 'babel-loader' },
                    {
                        loader: 'ts-loader',
                        options: {
                            transpileOnly: true,
                        },
                    },
                ],
            },
            {
                test: /\.(png|svg|jpg|gif|pdf|eot|ttf|svg)$/,
                type: 'asset/resource',
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new webpack.DefinePlugin({
            APP_ENV: JSON.stringify(process.env.CEM),
        }),
        new webpack.ProgressPlugin({ percentBy: 'entries' }),
        new ForkTsCheckerWebpackPlugin({
            eslint: {
                enabled: true,
                files: './src/**/*.{tsx,ts}',
            },
            logger: {
                devServer: false,
                infrastructure: 'console',
                issues: 'console',
            },
        }),
    ],
    output: {
        path: path.resolve(__dirname, '../build'),
        publicPath: '/',
        pathinfo: false,
    },
};
