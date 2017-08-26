//import path from 'path';
module.exports = {
	entry: "./src/index.js",
	output: {
		path: __dirname + "/dist",
		filename: "bundle.js"
	},
	module: {
		preLoaders: [
			{ test: /\.js$/, exclude: /node_modules/, loader: "eslint-loader" }
		],
		loaders: [
			{ test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
		]
	},
	eslint: {
		emitError: true,
		emitWarning: true,
		failOnError: true,
		failOnWarning: false
	}
};
