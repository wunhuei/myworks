const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require("webpack");


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
		}),
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, "src", "html", "Graphic.html"),
			filename: path.resolve(__dirname, "dist", "Graphic.html")
		}),
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, "src", "html", "WebDesign.html"),
			filename: path.resolve(__dirname, "dist", "WebDesign.html")
		}),
		new webpack.ProvidePlugin({
			$: "jquery",
			JQuery: "jquery",
			"window.JQery": "jquery"
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
			},
			{
				test: /\.(jpe?g|png|gif|svg)$/i,
				use: [
					{
						loader: 'file-loader',
						options: {
							outputPath: 'images/',
							publicPath: 'images/'
						}
					},
					{
						loader: 'image-webpack-loader'
					}
				]
			}
		]
	}
}