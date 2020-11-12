const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
   entry: './client/src/index.jsx',
	output: {
		filename: 'bundle.[hash].js',
		path: path.resolve(__dirname, 'client', 'dist')

   },
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			}
		]
   },
   plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'client', './src/index.html'),
			filename: 'index.html'
      }),
      new CleanWebpackPlugin()
	]
}