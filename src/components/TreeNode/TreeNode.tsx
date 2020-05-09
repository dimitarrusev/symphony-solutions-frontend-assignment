// Vendor
import React from "react";

// Components
import StyledTreeNode from "./StyledTreeNode";

const TreeNode: React.FC = ({ children }) => (
  <StyledTreeNode>{children}</StyledTreeNode>
);

export default TreeNode;
