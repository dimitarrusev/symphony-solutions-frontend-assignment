/* ------------------------------------------------------------------------------------ *
 *                                                                                      *
 *  Imports                                                                             *
 *                                                                                      *
 * ------------------------------------------------------------------------------------ */

// Types
import { TreeNodePropsType } from "../types";

/* ------------------------------------------------------------------------------------ *
 *                                                                                      *
 *  Helper                                                                              *
 *                                                                                      *
 * ------------------------------------------------------------------------------------ *
 *                                                                                      *
 * findTreeNodeDepth                                                                    *
 *                                                                                      *
 * returns the sum of the root nodes depth plus the return values of the calls of the   *
 * recursive funtion on the children nodes on the particular node .                     *
 *                                                                                      *
 * ------------------------------------------------------------------------------------ */

const findTreeNodeDepth = (
  treeNode: TreeNodePropsType,
  treeNodeDepth: number = 1
): any => {
  let depth = treeNodeDepth;

  // Handle base case of recursion
  //
  // i.e. if there's no `nodeChildren`, node depth is `1`
  //

  if (!Boolean(treeNode.nodeChildren.length)) {
    return depth;
  }

  const recurivelyTraverseTreeNode = (
    treeNode: TreeNodePropsType,
    treeNodeDepth: number = 1
  ): number => {
    treeNode.nodeChildren
      // First, filter only the tree nodes that have children
      .filter(
        (treeNodeChild) =>
          treeNodeChild.nodeChildren && treeNodeChild.nodeChildren.length >= 1
      )
      // Then, for each `treeNodeChild` increase the depth by one and
      // call `recurivelyTraverseTreeNode` with appropriate arguments
      .map((treeNodeChild) => {
        if (
          treeNodeChild.nodeChildren &&
          Boolean(treeNodeChild.nodeChildren.length >= 1)
        ) {
          depth = depth + 1;
          recurivelyTraverseTreeNode(treeNodeChild, treeNodeDepth + 1);
        }

        // When the end is reached return `depth`
        return depth;
      });

    return depth;
  };

  return recurivelyTraverseTreeNode(treeNode, treeNodeDepth);
};

/* ------------------------------------------------------------------------------------ *
 *                                                                                      *
 *  Exports                                                                             *
 *                                                                                      *
 * ------------------------------------------------------------------------------------ */

export { findTreeNodeDepth };
