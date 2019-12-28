const path = require('path')
const fs = require('fs')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const PUBLIC_PATH = path.resolve(__dirname, 'public')
const BUILD_PATH = path.resolve(__dirname, 'build')
const SRC_PATH = path.resolve(__dirname, 'src')

// generate the modules to create with webpack
const modules = () => {
  const populate = pathName => {
    const paths = []
    const files = fs.readdirSync(pathName)
    for (let file of files) {
      const absPath = path.resolve(pathName, file)
      if (/index.(ts|js)$/.test(absPath)) {
        const module = pathName.replace(SRC_PATH, '').substr(1)
        if (module) {
          paths.push({ module, absPath })
        }
      } else if (fs.lstatSync(absPath).isDirectory()) {
        paths.push(...populate(absPath))
      }
    }
    return paths
  }
  // reduce the list to the format needed for webpack
  return populate(SRC_PATH).reduce((acc, { module, absPath }) => {
    acc[`${module}/index`] = absPath
    return acc
  }, {})
}

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  entry: {
    'base-elements': './src/index.ts',
    ...modules(),
  },
  output: {
    path: BUILD_PATH,
    filename: '[name].js',
  },
  devServer: {
    contentBase: PUBLIC_PATH,
    compress: true,
    port: 8080,
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      hash: true,
      chunks: [ 'base-elements' ],
    }),
  ],
  resolve: {
    extensions: ['.js', '.ts', '.css', '.scss'],
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
