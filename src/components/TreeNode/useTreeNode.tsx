// // Vendor
// import { useState } from "react";

// // Types
// import { TreeNodeState } from "./";

// // Hooks
// import { useTree } from "../../hooks";

// export const useTreeNode = (
//   initialTreenNodeState: TreeNodeState = "is-collapsed"
// ) => {
//   const [treeNodeState, setTreeNodeState] = useState<TreeNodeState>(
//     initialTreenNodeState
//   );
//   const { treeState, setTreeState } = useTree();

//   function toggleTreeNodeState(id: number) {
//     //
//     // clone current treeState
//     //
//     // find treeNode which id matches the id that is passed as arg, and flip the isExpanded prop
//     //
//     // finally set the new TreeState
//     //

//     const tempTreeState = Object.assign({}, treeState);

//     console.log(`tempTreeState:`, tempTreeState);
//   }

//   return { treeNodeState, toggleTreeNodeState };
// };
