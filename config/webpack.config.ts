// const HtmlPlugin = require("html-webpack-plugin");

import * as webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";

import { resolve } from "./utils";

const config: webpack.Configuration = {
  entry: {
    index: resolve("src/index.tsx"),
  },
  output: {
    path: resolve("dist"),
    filename: "app.budle.[hash].js",
  },
  mode: "development",
  resolve: {
    extensions: [".json", ".js", ".jsx", ".ts", ".tsx"],
  },
  devtool: "source-map",
  module: {
    rules: [
      /* ------------------------------------------------------------------------------------ *
       *                                                                                      *
       * TypeScript Loader                                                                    *
       *                                                                                      *
       * ------------------------------------------------------------------------------------ */

      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader",
          },
        ],
      },
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader",
      },
    ],
  },

  /* ------------------------------------------------------------------------------------ *
   *                                                                                      *
   * Plugins                                                                              *
   *                                                                                      *
   * ------------------------------------------------------------------------------------ */

  plugins: [
    new HtmlWebpackPlugin({
      template: resolve("src/index.html"),
      favicon: resolve("src/assets/icons/favicon-32x32.png"),
      inject: true,
      chunks: ["index"],
      filename: "index.html",
    }),
  ],

  /* ------------------------------------------------------------------------------------ *
   *                                                                                      *
   * Externals                                                                            *
   *                                                                                      *
   * ------------------------------------------------------------------------------------ *
   *                                                                                      *
   * When importing a module whose path matches one of the following, just assume a       *
   * assume a corresponding global variable exists and use that instead.                  *
   *                                                                                      *
   * This is important because it allows us to avoid bundling all of our                  *
   * dependencies, which allows browsers to cache those libraries between builds.         *
   *                                                                                      *
   * ------------------------------------------------------------------------------------ */

  externals: {
    react: "React",
    "react-dom": "ReactDOM",
  },
};

export default config;
