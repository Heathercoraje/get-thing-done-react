const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './app/index.jsx',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				loader: './node_modules/babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				loaders: ['style-loader', 'css-loader']
			},
			{
				test: /\.(png|jpg|gif)$/,
				loader: 'file-loader'
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: './public/index.html'
		})
	],
	resolve: {
		extensions: ['.js', '.jsx']
	}
};
