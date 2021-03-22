const path = require("path");
const webpack = require("webpack");
const { merge } = require("webpack-merge");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const variables = require("./src/variables");
const features = require("./package.json").features || {};

const react = features["react"] === true ? require("./webpack.react.js") : {};

const isDevelopment = process.env.NODE_ENV === "development";

module.exports = merge(react, {
  context: __dirname,
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[contenthash].bundle.js",
    publicPath: "",
  },
  module: {
    rules: [
      {
        test: /\.module\.s(a|c)ss$/,
        use: [
          isDevelopment ? "style-loader" : MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: true,
              sourceMap: isDevelopment,
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: isDevelopment,
            },
          },
        ],
      },
      {
        test: /\.s(a|c)ss$/,
        exclude: /\.module.(s(a|c)ss)$/,
        use: [
          isDevelopment ? "style-loader" : MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              sourceMap: isDevelopment,
            },
          },
        ],
      },
      {
        test: /\.css$/,
        exclude: /\.(s(a|c)ss)$/,
        use: [
          isDevelopment ? "style-loader" : MiniCssExtractPlugin.loader,
          "css-loader",
        ],
      },
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".scss", ".css"],
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  plugins: [
    new HtmlWebPackPlugin({ ...variables }),
    new MiniCssExtractPlugin({
      filename: isDevelopment ? "[name].css" : "[name].[contenthash].css",
      chunkFilename: isDevelopment ? "[id].css" : "[id].[contenthash].css",
    }),
    new webpack.DefinePlugin({
      FEATURES: JSON.stringify(features),
    }),
  ],
});
