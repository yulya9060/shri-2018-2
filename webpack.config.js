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
    public: path.join(__dirname,'public')
};

const common = merge([
    {
    entry: {
        'index': PATHS.source + '/pages/main/index.js',
    },
    output: {
        path: PATHS.public,
        filename: './js/[name].js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            chunks: ['index','common'],
            template: PATHS.source + '/pages/main/index.html'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: "common"
        }),
        new CleanWebpackPlugin(PATHS.public),
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