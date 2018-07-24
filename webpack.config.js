const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const devserver = require('./webpack/devserver');
const sass = require('./webpack/sass');
const images = require('./webpack/images');
const fonts = require('./webpack/fonts');
const extractCSS = require('./webpack/css.extract');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const PATHS = {
    source: path.join(__dirname,'source'),
    build: path.join(__dirname,'build')
};

const common = merge([
    {
    entry: {
        'main': PATHS.source + '/pages/main/main.js',
    },
    output: {
        path: PATHS.build,
        filename: './js/[name].js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'main.html',
            chunks: ['main','common'],
            template: PATHS.source + '/pages/main/main.html'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: "common"
        }),
        new CleanWebpackPlugin(PATHS.build),
        new OptimizeCssAssetsWebpackPlugin({
            cssProcessorOptions: { discardComments: { removeAll: true } },
        })
    ],
    },
    images(),
    fonts()
   ]);
   
module.exports = function(env) {
    if (env === 'production') {
    return merge([
        common,
        extractCSS(),
    ]);
    }
    if (env === 'development') {
        return merge([
            common,
            devserver(),
            sass()
            ]);
    }
   };