const path = require('path');

module.exports = {
	entry: './src/app.js',
	output: {
		path: path.join(__dirname, 'public'),
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				loader: 'babel-loader',
				test: /\.js$/,
				exclude: /node_modules/
			},
			{
				test: /\.scss$/,
				use: [ 'style-loader', 'css-loader?url=false', 'sass-loader' ]
			}
		]
	},
	devtool: 'source-map',
	mode: 'development',
	devServer: {
		contentBase: path.join(__dirname, 'public'),
		hot: true,
		port: 3000
	}
};
