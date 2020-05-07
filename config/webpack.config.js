"use strict";

const { resolve } = require("./utils");

const HtmlPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    index: resolve("src/index.js"),
  },
  output: {
    filename: "[name].[hash].js",
    path: resolve("dist"),
  },
  module: {
    rules: [
      /* ------------------------------------------------------------------------------------ *
       *                                                                                      *
       * JavaScript Loader                                                                    *
       *                                                                                      *
       * ------------------------------------------------------------------------------------ */

      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlPlugin({
      template: resolve("src/index.html"),
      favicon: resolve("src/assets/icons/favicon-32x32.png"),
      inject: true,
      chunks: ["index"],
      filename: "index.html",
    }),
  ],
};
