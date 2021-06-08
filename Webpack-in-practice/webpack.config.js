const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'dist/',
  },
  mode: 'none',
  module: {
    rules: [
      {
        test: /\.(png|svg| jpeg| gif| jpg)$/i,
        type: 'asset/resource',
      },
    ],
  },
};
