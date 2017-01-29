var path = require('path');
var webpack = require('webpack');
 
var config = {
    entry: './app/app.js',
    output: {
        path: __dirname, filename: 'bundle.js' },
    watch: true,
    module : {
        loaders : [
            {
                test : /\.js$/,
                loader : 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
};
 
module.exports = config;
