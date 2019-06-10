const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const OutputDirectory = 'dist';

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
                test: /\.(png|jpe?g|gif)$/,
                loader: 'file-loader',
                options: {
                    outputPath: 'images/',
                    name: '[name].[ext]?[hash]',
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
    devServer: {
        historyApiFallback: true,
        stats: { colors: true },
        proxy: {
            '/api': {
                'target': {
                    'host': 'localhost',
                    'protocol': 'http',
                    'port': '8080'
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
        new ExtractTextPlugin('[name].bundle.css')
    ]
};