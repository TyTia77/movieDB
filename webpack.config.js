const webpack = require('webpack');

module.exports = {

    //define entry point
    entry: './src/index.js',

    //define output point
    output: {
        filename: './bundle.js'
    },

    module: {
        loaders: [{
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-0'],
                    plugins: ['react-html-attrs', 'transform-decorators-legacy', 'transform-class-properties']
                }
            },
            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!sass-loader'
            }
        ] //loaders
    }, //module

    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
    ]
};