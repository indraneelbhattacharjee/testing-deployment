const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // Entry point of your application
    entry: './src/index.js',

    // Output configuration for Webpack
    output: {
        path: path.resolve(__dirname, 'build'), // Where files should be generated
        filename: 'bundle.js', // The name of the bundled file
    },

    // Configuration for development server
    devServer: {
        static: './build',
        hot: true,
        open: true,
    },

    // Module rules and loaders
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/, // Regex to match JavaScript and JSX files
                exclude: /node_modules/, // Exclude the node_modules directory
                use: {
                    loader: 'babel-loader', // Use babel-loader to transpile JSX/JS
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'], // Presets for environment and React
                    },
                },
            },
            {
                test: /\.css$/, // Regex to match CSS files
                use: ['style-loader', 'css-loader', 'postcss-loader'], // Loaders for processing CSS
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i, // Regex to match image files
                type: 'asset/resource',
            },
        ],
    },

    // Plugins configuration
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html', // HTML template to use
            favicon: './public/favicon.ico', // Path to favicon
        }),
    ],

    // Resolve extensions automatically
    resolve: {
        extensions: ['.js', '.jsx'], // Automatically resolve these extensions
    },
};
