/* ------------------------------------------------------------------------------------ *
 *                                                                                      *
 *  Imports                                                                             *
 *                                                                                      *
 * ------------------------------------------------------------------------------------ */

// Types
import { TreeDataPropType, TreeNodePropsType } from "../types";

// Helpers
import { constructNewTreeState } from "./constructNewTreeState";

/* ------------------------------------------------------------------------------------ *
 *                                                                                      *
 *  Helper                                                                              *
 *                                                                                      *
 * ------------------------------------------------------------------------------------ */

const toggleAllTreeNodes = (
  treeState: TreeDataPropType,
  treeStateVal: boolean = true
): any => {
  const recurivelyTraverseTreeNode = (treeNode: TreeNodePropsType) => {
    treeNode.nodeChildren
      // First, filter only the tree nodes that have children
      .filter(
        (treeNodeChild) =>
          treeNodeChild.nodeChildren && treeNodeChild.nodeChildren.length >= 1
      )
      // Then, set `isExpanded` prop to `true` or `false` on each `treeNodeChild`
      // and call `recurivelyTraverseTreeNode` with appropriate arguments
      .map((treeNodeChild) => {
        if (
          treeNodeChild.nodeChildren &&
          Boolean(treeNodeChild.nodeChildren.length >= 1)
        ) {
          treeNodeChild.isExpanded = treeStateVal ? true : false;
          recurivelyTraverseTreeNode(treeNodeChild);
        }
      });
  };

  if (Boolean(treeState.treeNodes.length)) {
    treeState.treeNodes
      .filter(
        (treeNode) => treeNode.nodeChildren && treeNode.nodeChildren.length >= 1
      )
      .map((treeNode) => {
        treeNode.isExpanded = treeStateVal ? true : false;
        recurivelyTraverseTreeNode(treeNode);
      });
  }

  //
  // construct and return new treeState
  //

  const newTreeState = constructNewTreeState(treeState);

  return newTreeState;
};

/* ------------------------------------------------------------------------------------ *
 *                                                                                      *
 *  Exports                                                                             *
 *                                                                                      *
 * ------------------------------------------------------------------------------------ */

export { toggleAllTreeNodes };
