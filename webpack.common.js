const webpack = require('webpack')
const PATH = require('./path')

const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    main: `${PATH.source}/index.js`
  },

  output: {
    publicPath: '/',
    path: PATH.build
  },

  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.css', '.jsx'],
    symlinks: true,
    alias: {
      '@site': PATH.source,
      '@components': PATH.components
    }
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          query: {
            presets: [
              '@babel/preset-react',
              '@babel/preset-env',
              {
                plugins: ['@babel/plugin-syntax-dynamic-import']
              }
            ]
          }
        }
      },

      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: {
          loader: 'style-loader!css-loader'
        }
      },

      {
        test: /\.(otf|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 50000,
              mimetype: 'application/font-woff',
              name: './fonts/[name].[ext]'
            }
          }
        ]
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: `${PATH.public}/index.html`
    })
  ]
}
