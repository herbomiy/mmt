const  path = require('path');

module.exports = {
	// 入口
	entry: [
		'react-hot-loader/patch', // react-hot-reload
		path.join(__dirname, 'src/index.js')
	],
	// 输出到dist文件夹输出名: bundle.js
	output: {
		path: path.join(__dirname, './dist'),
		filename: 'bundle.js'
	},
	resolve: {
		alias: {
			pages: path.join(__dirname, 'src/pages'),
			component: path.join(__dirname, 'src/component'),
			router: path.join(__dirname, 'src/router')
		}
	},
	module: {
		rules: [{ // 解析规则
			test: /\.js$/,
			use: ['babel-loader?cacheDirectory=true'],
			include: path.join(__dirname, 'src')
		}]
	},
	devServer: {
		contentBase: path.join(__dirname, './dist'),
		port: 80,
		historyApiFallback: true, // 指定所有404 指向 index.html
		proxy: { // 代理
			'/api': 'http://rxyl.malrro.com'
		}
	}
}