const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
    entry:path.resolve(__dirname,"src","index.js"),
    output: {
        path:path.resolve(__dirname,"dist"),
        filename:"bundle.js"
    },
    devtool: "eval-source-map",
    devServer: {
        contentBase: path.resolve(__dirname,"dist"),
        port:4000
    },

    plugins:[
        new MiniCssExtractPlugin({
            filename: "bundle.css"
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src", "html", "index.html"),
            filename: path.resolve(__dirname, "dist", "index.html")
        })
    ],

    module: {
        rules: [
            {
                test: /\.s?css$/,
                use: [
                    "style-loader",
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.ejs$/,
                loader: 'ejs-loader'
            }
        ]
    }

}