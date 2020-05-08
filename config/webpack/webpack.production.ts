import { Configuration } from "webpack";

import { resolve } from "../utils";

const config: Configuration = {
  entry: {
    vendor: [
      resolve("node_modules/react/umd/react.production.min.js"),
      resolve("node_modules/react-dom/umd/react-dom.production.min.js"),
    ],
  },

  //
  // `devtool: "nosources-source-map"` https://webpack.js.org/configuration/devtool/#production
  //

  devtool: "nosources-source-map",

  //
  // `hints: "error"` https://webpack.js.org/configuration/performance/#performancehints
  //

  performance: {
    hints: "error",
  },
};

export default config;
