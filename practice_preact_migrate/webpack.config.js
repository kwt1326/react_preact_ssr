const { resolve } = require('path');

module.exports = {
  context: resolve(__dirname, 'src'),
  entry: ['./index.js'],
  output: {
    filename: 'client.bundle.js', // output filename
    path: resolve(__dirname, 'build'), // output path
    publicPath: '/'
  },
  resolve: {
    alias: {
      'react': 'preact/compat',
      'react-dom': 'preact/compat'
    }
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      }
    ],
  }
};
