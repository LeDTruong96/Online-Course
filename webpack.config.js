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
	entry: './scripts/app.js',
	output: {
		path: path.join(__dirname),
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.s?css$/,
				use: [ 'css-loader?url=false', postcssLoader, 'sass-loader' ]
			}
		]
	}
};

// development webpack configration
const developmentConfig = {
	mode: 'development',
	devtool: 'inline-source-map',
	devServer: {
		before: function(app, server) {
			server._watch('./*.html');
		},
		contentBase: path.join(__dirname),
		port: 5050,
        hot:true,
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

	return mergeConfig;
};