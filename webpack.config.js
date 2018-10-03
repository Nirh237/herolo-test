const path = require('path');
const webpack = require('webpack');
//const ExtractTextPlugin = require('extract-text-webpack-plugin'); works with webpack v3
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

process.env.NODE__ENV = process.env.NODE__ENV || 'development';

if(process.env.NODE__ENV === 'test'){
  require('dotenv').config({ path: '.env.test' });
} else if(process.env.NODE__ENV === 'development'){
  require('dotenv').config({ path: '.env.development' });
}

//process.env.NODE__ENV

module.exports = (env) => {
  const isProduction = env === 'production';
  //const CSSExtract = new ExtractTextPlugin('styles.css'); also works with webpack v3
  const CSSExtract = new MiniCssExtractPlugin({ filename: 'styles.css' });
  return {
    mode: env,
    entry: ['babel-polyfill', './src/app.js'],
    output: {
      path: path.join(__dirname, 'public', 'dist'),
      filename: 'bundle.js'
    },
    module: {
      rules: [{
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      }, {
        test: /\.s?css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
              loader: 'css-loader',
              options: {
                  sourceMap: true
              }
          },
          {
              loader: 'sass-loader',
              options: {
                  sourceMap: true
              }
          }
      ]
      }]
    },
    plugins: [
      CSSExtract
    ],
    devtool: isProduction ? 'source-map' : 'inline-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true,
      publicPath: '/dist/'
    }
  };
};
