const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { HotModuleReplacementPlugin } = require('webpack');

module.exports = {
    mode: 'development',
    entry: [
        './src/index.ts'  
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        clean: true,
    },
    devServer: {
        static: path.join(__dirname, 'dist'),
        hot: true,
        open: true,
        port: 8080,
        historyApiFallback: true  
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],  
            },
            {
                test: /\.html$/,
                loader: 'html-loader',  
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'  
        }),
        new HotModuleReplacementPlugin(),  
    ],
    devServer: {
        watchFiles: ['src/**/*'],  
    },
};
