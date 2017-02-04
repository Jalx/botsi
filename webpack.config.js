var webpack = require('webpack');
var path = require("path");
var BUID_DIR = path.resolve(__dirname, './bin');
var APP_DIR = path.resolve(__dirname, './src')
var config = {
    //entry: APP_DIR + '/app.js',
    entry: APP_DIR + '/index.jsx',
    output: {
        path: BUID_DIR,
        filename: 'app.bundle.js'
    }
};
module.exports = config;