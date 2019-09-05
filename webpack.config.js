const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
const webpack = require('webpack');

const OutputDirectory = 'dist';
const defaultCacheSize = 100;

module.exports = {
    entry: ['babel-polyfill', './src/index.js', './src/style.scss'],
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, OutputDirectory),
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: "/node_modules/",
                loader: "babel-loader"
            },
            {
                test: /\.(woff|woff2|eot|ttf)$/,
                loader: 'url-loader?limit=8192'
            },
            {
                test: /\.(jpe?g|png|gif|svg|ico)$/,
                loader: 'file-loader',
                options: {
                    name: 'images/[path]/[name].[ext]?[hash]',
                }
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    publicPath: '../',
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader'
                })
            }
        ]
    },
    optimization: {
        runtimeChunk: true
    },
    devServer: {
        historyApiFallback: true,
        stats: { colors: true },
        proxy: {
            '/api/v0/': {
                'target': {
                    'host': 'localhost',
                    'protocol': 'http',
                    'port': '8000'
                },
                changeOrigin: true,
                secure: false,
            },
        },
    },
    plugins: [
        new CleanWebpackPlugin([OutputDirectory]),
        new HtmlWebpackPlugin({
            template: "./src/template/default.html"
        }),
        new ExtractTextPlugin('[name].[hash].css'),
        new BundleAnalyzerPlugin(),
        new webpack.HashedModuleIdsPlugin({ 
            hashFunction: "md4", 
            hashDigest:"base64", 
            hashDigestLength: 8,
        }),
        new HardSourceWebpackPlugin({
            cacheDirectory: '.cache/source/[confighash]',
            configHash: function(webpackConfig) {
                return require('node-object-hash')({sort: false}).hash(webpackConfig);
            },
            info: {
                mode: 'none',
                level: 'debug'
            },
            environmentHash: {
                root: process.cwd(),
                directories: [],
                files: ['package-lock.json']
            },
            cachePrune: {
                maxAge: 2 * 24 * 60 * 60 * 1000,
                sizeThreshold: defaultCacheSize * 1024 * 1024,
            }
        }),
    ]
};