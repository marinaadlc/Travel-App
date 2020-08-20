const path = require("path")
const webpack = require("webpack")
const HtmlWebPackPlugin = require("html-webpack-plugin")
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const WorkboxPlugin = require('workbox-webpack-plugin')

module.exports={
  mode: 'production',
  entry: "./src/client/index.js",
  output: {
    libraryTarget: 'var',
    library: 'Client'
  },
  module: {
    rules:[
      {
        test:'/\.js$/',
        exclude: /node_modules/,
        loader:"babel-loader"
      },
      {
        test: /\.scss$/,
        use: [ MiniCSSExtractPlugin.loader, 'css-loader', 'sass-loader']
      }
    ]
  },
  optimization: {
    minimizer: [
      new TerserPlugin({}),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
        template: "./src/client/views/index.html",
        filename: "./index.html",
    }),
    new MiniCSSExtractPlugin({
      filename: "[name].css"
    }),
    new WorkboxPlugin.GenerateSW()
  ]
}
