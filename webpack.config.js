const HtmlWebpackPlugin = require('html-webpack-plugin')
const FileCatalogue = require('./FileCatalogue')
const webpack = require('webpack')

module.exports = {
    entry: './src/app.js',
    output: {
        path: __dirname + '/www',
        filename: 'app.bundle.js'
    },
    module: {
        loaders: [
            {
                test: /.(jpg|png)$/,
                use: 'file-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin(),
        new FileCatalogue()
    ]
}
