// Vendor
import { useState } from "react";

// Types
import { TreeNodeState } from "./";

// Hook
export const useTreeNode = (defaultState: TreeNodeState = "is-collapsed") => {
  const [treeNodeState, setTreeNodeState] = useState<any>(
    defaultState
  ); /* TODO: add appropriate type(s) */

  function toggleTreeNodeState() {
    return treeNodeState === "is-expanded"
      ? setTreeNodeState("is-collapsed")
      : setTreeNodeState("is-expanded");
  }

  return [treeNodeState, toggleTreeNodeState];
};
