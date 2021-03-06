// const MiniCssExtractPlugin = require("mini-css-extract-plugin")
// new MiniCssExtractPlugin({
//   filename: "[name].css",
//   chunkFilename: "[id].css"
// })
// {
//   test: /\.css$/,
//   use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"]
// }

// remember to do this
// https://github.com/oliviertassinari/babel-plugin-transform-react-remove-prop-types
const HtmlWebPackPlugin = require('html-webpack-plugin')
const autoprefixer = require('autoprefixer')

module.exports = {
  devtool: 'cheap-module-source-map',
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
      {
        oneOf: [
          {
            test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: 'static/media/[name].[hash:8].[ext]',
            },
          },
          {
            test: /\.js$/,
            include: /src/,
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
            },
          },
          {
            test: /\.css$/,
            use: [
              'style-loader',
              {
                loader: 'css-loader',
                options: {
                  importLoaders: 1,
                },
              },
              {
                loader: 'postcss-loader',
                options: {
                  ident: 'postcss',
                  plugins: () => [
                    require('postcss-flexbugs-fixes'),
                    autoprefixer({
                      browsers: [
                        '>1%',
                        'last 4 versions',
                        'Firefox ESR',
                        'not ie < 9',
                      ],
                      flexbox: 'no-2009',
                    }),
                  ],
                },
              },
            ],
          },
          {
            exclude: [/\.js$/, /\.html$/, /\.json$/],
            loader: 'file-loader',
            options: {
              name: 'static/media/[name].[hash:8].[ext]',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      favicon: './public/favicon.png',
      template: './public/index.html',
      filename: './index.html',
    }),
  ],
  performance: {
    hints: false,
  },
}
