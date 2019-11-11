const path = require('path')

module.exports = {
  mode: 'production',
  devtool: 'inline-source-map',
  entry: {
    base_elements: './src/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'docs/assets'),
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      // Just import normal css files
      {
        test: /\.css$/,
        include: /src/,
        use: [
          { loader: 'css-loader' },
        ]
      },
      // Converts scss files into css to use within custom elements
      {
        test: /\.scss$/,
        include: /src/,
        use: [
          { loader: 'css-loader' },
          { loader: 'sass-loader' },
        ]
      },
      // Transfile the source files so we can use newer syntax
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/env',
                {
                  modules: false,
                  targets: {
                    chrome: "77",
                  },
                },
              ],
            ],
            plugins: [
              '@babel/plugin-proposal-optional-chaining',
              '@babel/plugin-proposal-class-properties',
              [ '@babel/plugin-proposal-decorators', { decoratorsBeforeExport: true } ],
            ]
          }
        }
      },
      // Load files
      {
        test: /\.(jpe|jpg|woff|woff2|eot|ttf|svg)(\?.*$|$)/,
        use: [
          {
            loader: 'file-loader',
            options: { name: '[path][name].[ext]' }
          },
        ]
      },
    ]
  }
};
