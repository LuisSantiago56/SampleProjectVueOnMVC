const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    target: "web",
    mode: "development",
    entry: {
        app: './Vue/main.js',
        hmr: ['webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000', 'vue', './Vue/main.js']
    },
    output: {
        path: path.join(__dirname, 'wwwroot'),
        publicPath: '/',
        filename: 'bundle_[name].js'
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ["@babel/preset-env"],
                        }
                    },
                    'eslint-loader'
                ],
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ]
}
