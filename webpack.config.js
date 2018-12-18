const path = require('path');
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
            }
        ]
    }
}