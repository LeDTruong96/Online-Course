const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { mergeWithRules } = require('webpack-merge');

const postcssLoader = {
	loader: 'postcss-loader',
	options: {
		postcssOptions: {
			plugins: [ require('autoprefixer') ]
		}
	}
};

// Common webpack configration
const commonConfig = {
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
				use: [ 'css-loader', postcssLoader, 'sass-loader' ]
			}
		]
	}
};

// development webpack configration
const developmentConfig = {
	mode: 'development',
	devtool: 'inline-source-map',
	devServer: {
		contentBase: path.join(__dirname, 'public'),
		port: 5050,
		historyApiFallback: true
	},
	module: {
		rules: [
			{
				test: /\.s?css$/,
				use: [ 'style-loader' ]
			}
		]
	}
};

// production webpack configration
const productionConfig = {
	mode: 'production',
	devtool: 'source-map',
	module: {
		rules: [
			{
				test: /\.s?css$/,
				use: [ MiniCssExtractPlugin.loader ]
			}
		]
	},
	plugins: [ new MiniCssExtractPlugin({ filename: 'styles.css' }) ]
};

module.exports = () => {
	const rMode = process.env.npm_lifecycle_event;
	const subConfig = rMode === 'dev' ? developmentConfig : productionConfig;
	const rulesMergeConfig = {
		module: {
			rules: {
				test: 'match',
				use: 'prepend'
			}
		}
	};

	const mergeConfig = mergeWithRules(rulesMergeConfig)(commonConfig, subConfig);

	// console.log(mergeConfig.module.rules);
	return mergeConfig;
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
