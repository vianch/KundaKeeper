/*eslint-disable no-undef*/
const path = require("path");
// const nodeExternals = require("webpack-node-externals"); // for server
const HtmlWebPackPlugin = require("html-webpack-plugin");
const WebpackMd5Hash = require("webpack-md5-hash");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const TSLintPlugin = require("tslint-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
require("dotenv").config();

const developmentEnvironment = "development";

module.exports = {
  devtool: "source-map",
  entry: {
    app: ["./src/index.tsx"],
    vendor: ["react", "react-dom"],
  },
  output: {
    filename: "js/[name].[chunkhash].js",
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json", ".scss", ".css"],
  },
  target: "web",
  // externals: [nodeExternals()], // just for backend
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        enforce: "pre",
        exclude: /node_modules/,
        use: [{ loader: "tslint-loader" }],
      },
      {
        test: /\.tsx?$/,
        loader: "awesome-typescript-loader",
        exclude: /node_modules/,
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader",
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: {
              minimize: process.env.ENVIRONMENT !== developmentEnvironment,
            },
          },
        ],
      },
      {
        test: /\.css$/,
        loader: "css-loader",
        options: {
          modules: true,
          sourceMap: process.env.ENVIRONMENT === developmentEnvironment,
          importLoaders: 1,
          localIdentName: "[name]__[local]__[hash:base64:5]",
        },
      },
      {
        test: /\.scss$/,
        use: [
          // "style-loader",
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              importLoaders: 2,
              localIdentName: "[name]__[local]__[hash:base64:5]",
              modules: true,
              sourceMap: process.env.ENVIRONMENT === developmentEnvironment,
            },
          },
          "sass-loader",
        ],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "images/",
              publicPath: "../images/",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new TSLintPlugin({
      files: ["./src/**/*.ts", "./src/**/*.tsx"],
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "css/style.[contenthash].css",
    }),
    new OptimizeCSSAssetsPlugin({}),
    new HtmlWebPackPlugin({
      favicon: "./src/favicon.ico",
      hash: true,
      template: "./src/index.html",
      filename: "./index.html",
    }),
    new WebpackMd5Hash(),
  ],
  node: {
    fs: "empty",
  },
};
