const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require("webpack");

module.exports = {
	entry:path.resolve(__dirname,"src","index.js"),
	output: {
		path:path.resolve(__dirname,"dist"),
		filename:"bundle-[hash].js"
	},
	plugins:[
		new MiniCssExtractPlugin({
			filename: "bundle-[hash].css"
		}),
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, "src", "html", "index.html"),
			filename: path.resolve(__dirname, "dist", "index.html"),
			title: "wunhuei works"
		}),
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, "src", "html", "Graphic.html"),
			filename: path.resolve(__dirname, "dist", "Graphic.html"),
			title: "wunhuei works - Graphi"
		}),
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, "src", "html", "WebDesign.html"),
			filename: path.resolve(__dirname, "dist", "WebDesign.html"),
			title: "wunhuei works - WebDesign"
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