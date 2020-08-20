var path = require('path');
var webpack = require('webpack');
 
var config = {
    entry: './app/app.js',
    output: {
        path: __dirname, filename: 'bundle.js' },
    watch: true,
    mode: 'production',
    module : {
        rules : [
            {
                test : /\.js$/,
   		exclude: /(node_modules|bower_components)/,
   	 	loader: 'babel-loader?presets[]=env,presets[]=react,presets[]=es2015'
            }
        ]
    }
};
 
module.exports = config;
