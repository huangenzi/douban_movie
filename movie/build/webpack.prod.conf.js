var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var path = require('path');
var webpack = require('webpack');
// 引入基本配置
var config = require('./webpack.config');

// config.vue = {
//     loaders: {
//         css: ExtractTextPlugin.extract("css")
//     }
// };
config.module.rules = [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            css: ExtractTextPlugin.extract({
              loader: 'css-loader',
              fallbackLoader: 'vue-style-loader' // <- this is a dep of vue-loader, so no need to explicitly install if using npm3
            })
          }
        }
      }
    ];

config.plugins = [
	
	new webpack.DefinePlugin({
       'process.env': {
            NODE_ENV: '"production"'
        }
    }),
    //压缩js代码
	new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
	    name: 'vendors',
	    filename: 'vendors.js',
	}),
    new webpack.optimize.OccurrenceOrderPlugin(),
    // 提取css为单文件
   // new ExtractTextPlugin("../[name].[contenthash].css"),
    new ExtractTextPlugin("../style.css"),

    new HtmlWebpackPlugin({
        filename: '../index.html',
        template: path.resolve(__dirname, '../app/index/index.html'),
        inject: true
    })
];

module.exports = config;