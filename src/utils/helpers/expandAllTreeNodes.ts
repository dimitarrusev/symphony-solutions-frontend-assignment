// Types
import { TreeDataPropType, TreeNodePropsType } from "../types";

/* ------------------------------------------------------------------------------------ *
 *                                                                                      *
 *  Helper                                                                              *
 *                                                                                      *
 * ------------------------------------------------------------------------------------ */

//
// TODO:
//
// Extract bits into separate functions and document this!
//

//
// findTreeDepth
//

const findTreeDepth = () => {};

//
// findTreeNodeDepth
//
// returns the sum of the root nodes depth plus the return values of the calls of the
// recursive funtion on the children nodes on the particular node
//

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

//
// calculateTotalExpandableTreeNodes
//

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

//
// calculateTotalExpandedTreeNodes
//

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

const expandAllTreeNodes = (treeState: TreeDataPropType): any => {
  const recurivelyTraverseTreeNode = (treeNode: TreeNodePropsType) => {
    treeNode.nodeChildren
      // First, filter only the tree nodes that have children
      .filter(
        (treeNodeChild) =>
          treeNodeChild.nodeChildren && treeNodeChild.nodeChildren.length >= 1
      )
      // Then, set `isExpanded` prop to true on each `treeNodeChild`
      // and call `recurivelyTraverseTreeNode` with appropriate arguments
      .map((treeNodeChild) => {
        if (
          treeNodeChild.nodeChildren &&
          Boolean(treeNodeChild.nodeChildren.length >= 1)
        ) {
          treeNodeChild.isExpanded = true;
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
        treeNode.isExpanded = true;
        recurivelyTraverseTreeNode(treeNode);
      });
  }

  //
  // construct and return new treeState
  //

  const newTreeState = Object.assign({}, treeState, {
    totalExpandableTreeNodes: calculateTotalExpandableTreeNodes(treeState),
    totalExpandedTreeNodes: calculateTotalExpandedTreeNodes(treeState),
  });

  return newTreeState;
};

/* ------------------------------------------------------------------------------------ *
 *                                                                                      *
 *  Exports                                                                             *
 *                                                                                      *
 * ------------------------------------------------------------------------------------ */

export { expandAllTreeNodes };
