import { Configuration } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";

import { resolve } from "../utils";

const config: Configuration = {
  // entry: {
  //   app: resolve("src/index.tsx"),
  // },
  output: {
    path: resolve("dist"),
    filename: "[name].[chunkhash].js",
  },
  resolve: {
    extensions: [".json", ".js", ".jsx", ".ts", ".tsx"],
  },
  node: {
    __dirname: false,
  },
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

      //
      // outputted `.js` files will have sourcemaps re-processed by `source-map-loader`
      //

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
      filename: "index.html",
      template: resolve("src/index.html"),
      favicon: resolve("src/assets/icons/favicon-32x32.png"),
    }),
  ],

  /* ------------------------------------------------------------------------------------ *
   *                                                                                      *
   *  Optimization                                                                        *
   *                                                                                      *
   * ------------------------------------------------------------------------------------ */

  optimization: {
    runtimeChunk: "single",

    splitChunks: {
      chunks: "all",

      cacheGroups: {
        default: {
          enforce: true,
          priority: 1,
        },

        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: 2,
          name: "vendors",
          enforce: true,
          chunks: "all",
        },
      },
    },
  },
};

export default config;
