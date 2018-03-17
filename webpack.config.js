const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const webpack = require('webpack');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, 'src/client');
const BUILD_DIR = path.resolve(__dirname, ROOT_DIR + '/public');
const APP_DIR = path.resolve(__dirname, ROOT_DIR + '/app');

const config = {
  entry: ['babel-polyfill', APP_DIR + '/index.jsx'],
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      include: APP_DIR,
      use: [{
        loader: require.resolve('babel-loader'),
        options: {
          cacheDirectory: true
        }
      }, {
        loader: "standard-loader",
        options: {
          parser: 'babel-eslint'
        }
      }]
    }, {
      test: /\.html$/,
      use: [{
        loader: "html-loader",
        options: {
          minimize: true
        }
      }]
    }]
  },
  plugins: [
    new LodashModuleReplacementPlugin({
      collections: true,
      paths: true
    }),
    new HtmlWebPackPlugin({
      template: APP_DIR + "/index.html",
      filename: ROOT_DIR + "/index.html"
    })
  ]
};

module.exports = config;
