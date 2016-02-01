'use strict';  
var webpack = require('webpack'),  
path = require('path');

var APP = __dirname + '/app';

var config = {
    context: APP,
    entry: './index.js',
    output: {
        path: APP,
        filename: "bundle.js"
    },
    module: {
      loaders: [
          {test: /\.js$/, loader: 'babel', exclude: /node_modules/,query: {presets: ['es2015']}}
      ]  
    },
    plugins: [
    new webpack.DefinePlugin({
      ON_TEST: process.env.NODE_ENV === 'test'
    })
  ]
}


if (process.env.NODE_ENV === 'production') {
    config.output.path = __dirname + '/dist';
}

module.exports = config;