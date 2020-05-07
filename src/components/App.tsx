// Vendor
import * as React from "react";

// Interface(s)
export interface AppProps {
  compiler: string;
  framework: string;
}

// Component(s)
export const App = (props: AppProps) => (
  <h1>
    Hello from {props.compiler} and {props.framework}!
  </h1>
);
