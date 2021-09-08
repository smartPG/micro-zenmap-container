const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const WebpackBar = require("webpackbar");
const copyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: 'development',
  entry: "./example/src/index.js",
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "index.js",
  },
  devtool: "inline-source-map",
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx"],
    alias:{
      "@": __dirname + "/example/src",
      "page": __dirname + "/example/src/pages"
    }
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
        test: /\.(js|jsx?)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        }
      },
    ],
  },
  plugins: [
    new WebpackBar(),
    // new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "dev 开发环境",
      template: path.resolve(__dirname, "../public/index.html"),
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, "../dist"),
    compress: true,
    port: 9000,
    open: true,
    hot: true,
  },
};
