/* ------------------------------------------------------------------------------------ *
 *                                                                                      *
 *  Imports                                                                             *
 *                                                                                      *
 * ------------------------------------------------------------------------------------ */

// Types
import { TreeDataPropType, TreeNodePropsType } from "../types";

/* ------------------------------------------------------------------------------------ *
 *                                                                                      *
 *  Helper                                                                              *
 *                                                                                      *
 * ------------------------------------------------------------------------------------ *
 *                                                                                      *
 * calculateTotalExpandedTreeNodes                                                      *
 *                                                                                      *
 * returns the sum of the total expanded tree nodes in the tree.                        *
 *                                                                                      *
 * ------------------------------------------------------------------------------------ */

const calculateTotalExpandedTreeNodes = (tree: TreeDataPropType): number => {
  let totalExpandedTreeNodes = 0;

  const recurivelyTraverseTreeNode = (treeNode: TreeNodePropsType): number => {
    treeNode.nodeChildren
      // First, filter only the tree nodes that have children
      .filter(
        (treeNodeChild) =>
          treeNodeChild.nodeChildren && treeNodeChild.nodeChildren.length >= 1
      )
      // Then, for each `treeNodeChild` check if its `isExpanded` prop is `true` and if so,
      // increase `totalExpandedTreeNodes` by one and call `recurivelyTraverseTreeNode` with
      // appropriate arguments
      .map((treeNodeChild) => {
        if (
          treeNodeChild.nodeChildren &&
          treeNodeChild.nodeChildren.length >= 1
        ) {
          if (treeNodeChild.isExpanded) {
            totalExpandedTreeNodes = totalExpandedTreeNodes + 1;
          }

          recurivelyTraverseTreeNode(treeNodeChild);
        }

        // When the end is reached return `totalExpandedTreeNodes`
        return totalExpandedTreeNodes;
      });

    return totalExpandedTreeNodes;
  };

  // First, Filter the top level tree nodes that have children
  const totalTopLevelExpandableTreeNodes = tree.treeNodes.filter(
    (treeNode) => treeNode.nodeChildren && treeNode.nodeChildren.length >= 1
  );

  // Then, check if the `isExpanded` prop on each `topLevelExpandableTreeNode` is `true`
  //  and if so, increase `totalExpandedTreeNodes` by one and call `recurivelyTraverseTreeNode`
  // with appropriate arguments
  totalTopLevelExpandableTreeNodes.map((topLevelExpandableTreeNode) => {
    if (topLevelExpandableTreeNode.isExpanded) {
      totalExpandedTreeNodes = totalExpandedTreeNodes + 1;
    }

    recurivelyTraverseTreeNode(topLevelExpandableTreeNode);
  });

  return totalExpandedTreeNodes;
};

/* ------------------------------------------------------------------------------------ *
 *                                                                                      *
 *  Exports                                                                             *
 *                                                                                      *
 * ------------------------------------------------------------------------------------ */

export { calculateTotalExpandedTreeNodes };
