import { Configuration } from "webpack";
import webpackMerge from "webpack-merge";

import commonConfig from "./webpack.common";
import developmentConfig from "./webpack.development";
import productionConfig from "./webpack.production";

const mode: Configuration["mode"] = process.env.MODE as Configuration["mode"];
const environmentConfig: Configuration =
  mode == "development" ? developmentConfig : productionConfig;

export default webpackMerge({ mode }, commonConfig, environmentConfig);
