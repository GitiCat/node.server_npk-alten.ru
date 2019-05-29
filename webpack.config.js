const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const OutputDirectory = 'dist';

module.exports = {
    entry: ['babel-polyfill', './src/index.js', './src/style.scss'],
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, OutputDirectory)
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: "/node_modules/",
                loader: "babel-loader"
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                loader: 'url-loader?limit=8192'
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
        port: 3000,
        open: true,
        proxy: {
            "/api": "http://localhost:8080"
        },
        historyApiFallback: true
    },
    plugins: [
        new CleanWebpackPlugin([OutputDirectory]),
        new HtmlWebpackPlugin({
            template: "./src/template/default.html"
        }),
        new ExtractTextPlugin('[name].bundle.css')
    ]
};