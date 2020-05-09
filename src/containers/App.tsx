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
      <TreeNode>Item 1</TreeNode>
      <TreeNode>Item 2</TreeNode>
      <TreeNode>Item 3</TreeNode>
      <TreeNode>Item 1</TreeNode>
      <TreeNode>Item 2</TreeNode>
      <TreeNode>Item 3</TreeNode>
      <TreeNode>Item 1</TreeNode>
      <TreeNode>Item 2</TreeNode>
      <TreeNode>Item 3</TreeNode>
      <TreeNode>Item 1</TreeNode>
      <TreeNode>Item 2</TreeNode>
      <TreeNode>Item 3</TreeNode>
    </Tree>
  </>
);

export default App;
