import { Configuration } from "webpack";

import { resolve } from "../utils";

const config: Configuration = {
  //
  // `devtool: "eval-source-map"` https://webpack.js.org/configuration/devtool/#development
  //

  devtool: "eval-source-map",

  //
  // `hints: "warning"` https://webpack.js.org/configuration/performance/#performancehints
  //

  performance: {
    hints: "warning",
  },
};

export default config;
