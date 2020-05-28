const webpack = require('webpack');
const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const babelSettings = {
    cacheDirectory: true,
    extends: path.join(__dirname, '/.babelrc')
};

module.exports = {
    mode: 'development',
    devtool: 'source-map',
    entry: {
        app: './src/app.jsx'
    },
    output: {
        path: path.join(__dirname, '/lib/'),
        filename: '[name].js',
        libraryTarget: 'umd'
    },
    module: {
        rules: [
            {
                test: /\.j(s|sx)/,
                use: `babel-loader?${JSON.stringify(babelSettings)}`
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ],
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx', '.css', '.scss'],
        alias: {
            Components: path.resolve(__dirname, 'src/components')
        }
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new BundleAnalyzerPlugin({
            analyzerHost: '0.0.0.0'
        })
    ]
};