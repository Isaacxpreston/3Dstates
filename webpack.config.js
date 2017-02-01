var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'public');
var APP_DIR = path.resolve(__dirname); //fixme later

var config = {
  devtool: 'source-map',
  entry: [
    'webpack-hot-middleware',
    APP_DIR + '/index.js'
  ],
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
    publicPath: '/public/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  module : {
    loaders : [
      {
        test: /\.scss$/,
        loaders: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.(ttf|svg|eot|pdf)$/,
        loader: 'file-loader',
        options: {
          name: 'fonts/[hash].[ext]',
        },
      },
      {
        test: /\.(jpg|png)$/,
        loader: 'url-loader',
        options: {
          limit: 25000,
        },
      },
      {
        test : /\.jsx?/,
        include : path.join(__dirname, 'client/app'),
        loader : 'babel-loader'
      },
      {
        test: /\.json$/,
        loader: "json-loader"
      }
    ]
  },
  node: {
    net: 'empty',
    dns: 'empty'
  }
};

module.exports = config;