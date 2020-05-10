// Vendor
import * as React from "react";

// Components
import Tree from "../components/Tree";
import TreeNode from "../components/TreeNode";

// Styles
import { GlobalStyle } from "../styles";

// Data
import data from "../utils/data";

const App = () => (
  <>
    <GlobalStyle />
    <h3>Imperative API Example:</h3>
    <Tree data={data} />

    <br />

    <h3>Declarative API Example:</h3>
    <Tree>
      <TreeNode key="1" id="1" label="Item 1" isExpanded={false} />
    </Tree>
  </>
);

export default App;
