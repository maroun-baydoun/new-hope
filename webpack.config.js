const path = require('path');

const PATHS = {
  src: path.join(__dirname, './src'),
  dist: path.join(__dirname, './dist')
}

module.exports = {
  mode: 'production',
  entry: {
    'new-hope': PATHS.src + '/new-hope.ts'
  },
  output: {
    path: PATHS.dist,
    filename: '[name].js',
    library: 'new-hope',
    libraryTarget: 'umd',
    umdNamedDefine: true,
    globalObject: 'this'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      }
    ],
  },
  resolve: {
    extensions: ['.ts', '.js']
  }
}
