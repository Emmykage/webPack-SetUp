const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  
  plugins: [

    new HtmlWebpackPlugin({

      title: 'Output Management',

    }),

  ],
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),

  },
  module: {

    rules: [

      {

        test: /\.css$/i,

        use: ['style-loader', 'css-loader'],

      },

    ],

  },
  devServer: {

    static: './dist',

  },
  optimization: {

    runtimeChunk: 'single',

  },
};