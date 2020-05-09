// Vendor
import * as React from "react";

// Components
import Tree from "../components/Tree";
import TreeNode from "../components/TreeNode";

// Styles
import { GlobalStyle } from "../styles";

const App = () => (
  <>
    <GlobalStyle />
    <Tree>
      <TreeNode label="Item 1" />
      <TreeNode label="Item 2" hasChildren={true}>
        <TreeNode label="Item 2-1" />
        <TreeNode label="Item 2-2" hasChildren={true}>
          <TreeNode label="Item 2-2-1" />
          <TreeNode label="Item 2-2-2" hasChildren={true}>
            <TreeNode label="Item 2-2-2-1" hasChildren={true}>
              <TreeNode label="Item 2-2-2-1-1" />
              <TreeNode label="Item 2-2-2-1-2" />
              <TreeNode label="Item 2-2-2-1-3" />
            </TreeNode>
            <TreeNode label="Item 2-2-2-2" />
          </TreeNode>
          <TreeNode label="Item 2-2-3" />
        </TreeNode>
      </TreeNode>
      <TreeNode label="Item 3" />
      <TreeNode label="Item 4" />
    </Tree>
  </>
);

export default App;
