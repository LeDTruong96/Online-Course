const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const postcssLoader = {
	loader: 'postcss-loader',
	options: {
		postcssOptions: {
			plugins: [ require('autoprefixer') ]
		}
	}
};

// const babelLoader = {
// 	loader: 'babel-loader',
// 	options: {
// 		presets: [ '@babel/env', '@babel/react' ],
// 		plugins: [
// 			'@babel/plugin-proposal-class-properties',
// 			'@babel/plugin-proposal-object-rest-spread'
// 		]
// 	}
// };

module.exports = {
	entry: './src/app.js',
	output: {
		path: path.join(__dirname, 'public'),
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				// use: [ babelLoader ],
				loader: 'babel-loader',
				test: /\.js$/,
				exclude: /node_modules/
			},
			{
				test: /\.s?css$/,
				use: [
					'style-loader',
					//MiniCssExtractPlugin.loader,
					'css-loader',
					postcssLoader,
					'sass-loader'
				]
			}
		]
	},
	devtool: 'source-map',
	mode: 'development',
	devServer: {
		contentBase: path.join(__dirname, 'public'),
		port: 5050,
		historyApiFallback: true
	},
	plugins: [ new MiniCssExtractPlugin({ filename: 'styles.css' }) ]
};
