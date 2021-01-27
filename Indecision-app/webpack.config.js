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

const babelLoader = {
	loader: 'babel-loader',
	options: {
		presets: [ '@babel/preset-env', '@babel/preset-react' ],
		plugins: [ 'transform-class-properties' ]
	}
};

module.exports = {
	entry: './src/app.js',
	output: {
		path: path.join(__dirname, 'public'),
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				use: [ babelLoader ],
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
		port: 9000
	},
	plugins: [ new MiniCssExtractPlugin({ filename: 'styles.css' }) ]
};
