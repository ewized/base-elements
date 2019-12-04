const path = require('path')

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  entry: {
    'base-elements': './src/index.ts',
  },
  output: {
    path: path.resolve(__dirname, 'public/assets'),
    filename: '[name].bundle.js',
  },
  resolve: {
    extensions: ['.ts', '.css', '.scss'],
  },
  module: {
    rules: [
      // Just import normal css files
      {
        test: /\.css$/,
        include: /src/,
        use: [
          { loader: 'css-loader' },
        ],
      },
      // Converts scss files into css to use within custom elements
      {
        test: /\.scss$/,
        include: /src/,
        use: [
          { loader: 'css-loader' },
          { loader: 'sass-loader' },
        ],
      },
      // Transpile TypeScript source files
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      // Load files
      {
        test: /\.(jpe|jpg|woff|woff2|eot|ttf|svg)(\?.*$|$)/,
        use: [
          {
            loader: 'file-loader',
            options: { name: '[name].[ext]' },
          },
        ],
      },
    ],
  },
}
