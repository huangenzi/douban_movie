var path = require('path');

function resolve(dir) {
    return path.join(__dirname, '..', dir)
}

module.exports = {
	entry: {
		index: path.resolve(__dirname,'../app/index/index.js'),
		vendors: [
	        'Vue'
	    ]
	},
	output: {
		// 输出路径是 myProject/output/static
	    path: path.resolve(__dirname, '../app/output/static'),
	    publicPath: '/',
	    filename: '[name].[hash].js',
	    chunkFilename: '[id].[chunkhash].js'
	},
	resolve: {
		extensions: ['.js','.jsx','.vue'],
		alias: {
                'vue$': 'vue/dist/vue.js'
        }
	},	
	module: {
		loaders: [
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			},
			{
				test: /\.js$/,
                loader: 'babel-loader',
                include: [resolve('src'), resolve('test')]
			},
			//加载图片
			{
				test: /\.(png|jpg|gif|svg)$/,
				loader: 'url',
				query: {
					limit: 10000,
					name: '[name].[ext]?[hash:7]'
				}
			}
		]
	}
}













