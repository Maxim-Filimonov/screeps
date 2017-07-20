var ScreepsWebpackPlugin = require('screeps-webpack-plugin');
var path = require("path");
var options = {
    branch: '$activeWorld',
    email: process.env.SCREEPS_EMAIL,
    password: process.env.SCREEPS_PWD
};
module.exports = {
    target: 'node',
    entry: './src/main.ts',
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: ['.ts', '.tsx', '.js']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main',
        libraryTarget: 'commonjs'
    },
    module: {
        loaders: [
            // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
            { test: /\.tsx?$/, loader: 'ts-loader' }
        ]
    },
    plugins: [
        new ScreepsWebpackPlugin(options)
    ]
};
