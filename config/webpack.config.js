const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const WebpackBar = require("webpackbar");
const copyWebpackPlugin = require("copy-webpack-plugin");
module.exports = {
  mode: 'production',
  entry: path.join(__dirname, "../index.js"),
  output: {
    path: path.resolve(__dirname, "../lib"),
    filename: "micro-zenmap-container.js",
    library: "micro-zenmap-container",    //指定库的全局变量
    libraryTarget: "umd",                 //支持的引入方式
    libraryExport: 'default'
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
          {
            loader: "less-loader",
            options: {
              sourceMap: true,
              lessOptions: {
                strictMath: true,
              },
            },
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ["file-loader"],
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: "ts-loader",
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
    ],
  },
  plugins: [
    new WebpackBar(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "lib 创建 library",
      template: path.resolve(__dirname, "../public/index.html"),
    }),
    new copyWebpackPlugin({
      patterns:[
        {from: path.join(__dirname, "../public/zenmap"),to:'./zenmap'}
      ]
    })
  ],
};
