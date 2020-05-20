/* ------------------------------------------------------------------------------------ *
 *                                                                                      *
 *  Imports                                                                             *
 *                                                                                      *
 * ------------------------------------------------------------------------------------ */

// Types
import { TreeDataPropType } from "../types";

// Helpers
import { findTreeNodeDepth } from "./findTreeNodeDepth";

/* ------------------------------------------------------------------------------------ *
 *                                                                                      *
 *  Helper                                                                              *
 *                                                                                      *
 * ------------------------------------------------------------------------------------ *
 *                                                                                      *
 * calculateTotalExpandableTreeNodes                                                    *
 *                                                                                      *
 * returns the sum of the total expandable tree nodes in the tree.                      *
 *                                                                                      *
 * ------------------------------------------------------------------------------------ */

const calculateTotalExpandableTreeNodes = (tree: TreeDataPropType): number => {
  let totalExpandableTreeNodes = 0;

  const totalTopLevelExpandableTreeNodes = tree.treeNodes.filter(
    (treeNode) => treeNode.nodeChildren && treeNode.nodeChildren.length >= 1
  );

  totalTopLevelExpandableTreeNodes.map((topLevelExpandableTreeNode) => {
    totalExpandableTreeNodes =
      totalExpandableTreeNodes + findTreeNodeDepth(topLevelExpandableTreeNode);
  });

  return totalExpandableTreeNodes;
};

/* ------------------------------------------------------------------------------------ *
 *                                                                                      *
 *  Exports                                                                             *
 *                                                                                      *
 * ------------------------------------------------------------------------------------ */

export { calculateTotalExpandableTreeNodes };
