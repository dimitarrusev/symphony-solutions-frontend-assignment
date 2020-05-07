// Vendor
import * as React from "react";
import * as ReactDOM from "react-dom";

// Components
import { App } from "./components/App";

ReactDOM.render(
  <App compiler="TypeScript" framework="React" />,
  document.getElementById("app-root")
);
