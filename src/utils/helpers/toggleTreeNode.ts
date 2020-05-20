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
 * ------------------------------------------------------------------------------------ *
 *                                                                                      *
 *  toggleTreeNode                                                                      *
 *                                                                                      *
 *  toggles tree node's `isExpanded` prop, constructs and returns new tree state.       *
 *                                                                                      *
 * ------------------------------------------------------------------------------------ */

const toggleTreeNode = (
  treeNodeID: number,
  treeNodeIsExpandedVal: boolean = false,
  treeState: TreeDataPropType
): TreeDataPropType => {
  const recurivelyTraverseTreeNode = (treeNode: TreeNodePropsType) => {
    treeNode.nodeChildren
      // First, filter only the tree nodes that have children
      .filter(
        (treeNodeChild) =>
          treeNodeChild.nodeChildren && treeNodeChild.nodeChildren.length >= 1
      )
      // Then, set tree nodes child `isExpanded` prop to `true` or `false`
      .map((treeNodeChild) => {
        if (
          treeNodeChild.nodeChildren &&
          Boolean(treeNodeChild.nodeChildren.length >= 1)
        ) {
          if (Number(treeNodeChild.id) === treeNodeID) {
            treeNodeChild.isExpanded = treeNodeIsExpandedVal ? true : false;
          } else {
            recurivelyTraverseTreeNode(treeNodeChild);
          }
        }
      });
  };

  if (Boolean(treeState.treeNodes.length)) {
    treeState.treeNodes
      .filter(
        (treeNode) => treeNode.nodeChildren && treeNode.nodeChildren.length >= 1
      )
      .map((treeNode) => {
        if (Number(treeNode.id) === treeNodeID) {
          treeNode.isExpanded = treeNodeIsExpandedVal ? true : false;
        } else {
          recurivelyTraverseTreeNode(treeNode);
        }
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

export { toggleTreeNode };
