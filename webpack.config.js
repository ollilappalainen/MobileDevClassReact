const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './app/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  entry: './app/index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'index_bundle.js'
  },
  resolve: {
    extensions: ['.jsx', '.json', '.js']
  },
  module: {
    rules: [
      { 
        test: /\.js$/, 
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        } 
      },
      { 
        test: /\.jsx$/, 
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      { 
        test: /\.less$/, 
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      { 
        test: /\.css$/, 
        use: ['style-loader', 'css-loader', 'less-loader']
      },
    ]
  },
  plugins: [HtmlWebpackPluginConfig]  
}
