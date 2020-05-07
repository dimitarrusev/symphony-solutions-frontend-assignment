import { Configuration } from "webpack";

const config: Configuration = {
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
