const rMode = process.env.npm_lifecycle_event;

const isDev = process.env.NODE_ENV !== 'production';

const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const copyWebpackPlugin = require('copy-webpack-plugin');
const fse = require('fs-extra');

let config = {};

class RunAfterCompile {
	apply(compiler) {
		compiler.hooks.done.tap('Copy images', function() {
			fse.copySync('./app/assets/images', './docs/assets/images');
		});
	}
}

let pages = fse
	.readdirSync('./app')
	.filter(function(file) {
		return file.endsWith('.html');
	})
	.map(function(page) {
		return new HtmlWebpackPlugin({
			filename: page,
			template: `./app/${page}`
		});
	});

if (rMode === 'dev') {
	config = {
		entry: './app/assets/scripts/App.js',
		output: {
			filename: 'bundled.js',
			path: path.resolve(__dirname, 'app')
		},
		devServer: {
			before: function(app, server) {
				server._watch('./app/**/*.html');
			},
			contentBase: path.join(__dirname, 'app'),
			hot: true,
			port: 4000,
			host: '0.0.0.0'
		},
		mode: 'development',
		devtool: 'source-map',
		module: {
			rules: [
				{
					test: /\.css$/i,
					use: [
						'style-loader',
						'css-loader?url=false',
						{
							loader: 'postcss-loader',
							options: {
								postcssOptions: {
									plugins: [
										require('postcss-import'),
										require('postcss-mixins'),
										require('postcss-simple-vars'),
										require('postcss-nested'),
										require('postcss-hexrgba'),
										require('autoprefixer')
									]
								}
							}
						}
					]
				}
			]
		}
	};
}

if (rMode === 'build') {
	config = {
		entry: './app/assets/scripts/App.js',
		output: {
			filename: '[name].[chunkhash].js',
			chunkFilename: '[name].[chunkhash].js',
			path: path.resolve(__dirname, 'docs')
		},
		mode: 'production',
		optimization: {
			splitChunks: { chunks: 'all', minChunks: 2 }
		},
		module: {
			rules: [
				{
					test: /\.css$/i,
					use: [
						MiniCssExtractPlugin.loader,
						'css-loader?url=false',
						{
							loader: 'postcss-loader',
							options: {
								postcssOptions: {
									plugins: [
										require('postcss-import'),
										require('postcss-mixins'),
										require('postcss-simple-vars'),
										require('postcss-nested'),
										require('postcss-hexrgba'),
										require('autoprefixer'),
										require('cssnano')
									]
								}
							}
						}
					]
				},
				{
					test: /\.js$/,
					exclude: /(node_modules)/,
					use: {
						loader: 'babel-loader',
						options: {
							presets: [ '@babel/preset-env' ]
						}
					}
				}
			]
		},
		plugins: [
			pages[0],
			new CleanWebpackPlugin(),
			new MiniCssExtractPlugin({ filename: 'styles.[chunkhash].css' }),
			new copyWebpackPlugin({
				patterns: [ { from: './app/assets/images', to: './assets/images' } ]
			})
		]
	};
}

module.exports = config;
