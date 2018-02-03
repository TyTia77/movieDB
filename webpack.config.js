const debug   = process.env.NODE_ENV ? false : true;
const webpack = require('webpack');

module.exports = {
    devtool: debug ? "inline-sourcemap" : false,

    //define entry point
    entry: './src/index.jsx',

    //define output point
    output: {
        path: __dirname +'/build/',
        filename: 'bundle.js',

        // tells webpack where to serve bundle in memory
        // instead of having it at /build/, set it to /
        // 
        // virtual bundle needs to be on root directory
        // when running on server, we target src=./bundle
        // as the server is running on root, but serving 
        // /build directory
        publicPath: '/'
    },

    module: {
        loaders: [{
                test: /\.jsx?$/,
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

    // you can now require('file') instead of require('file.jsx/js')
    resolve: {
        extensions: ['.js', '.jsx', '.es6'],
    },

    // dont produce file in dev environment
    plugins: debug ? [] : [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
    ]
};