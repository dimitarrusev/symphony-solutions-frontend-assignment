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
 * ------------------------------------------------------------------------------------ */

//
// TODO:
//
// Extract bits into separate functions and document this!
//

const constructNewTreeNodeStateObject = async (
  treeNodeID: number,
  treeState: TreeDataPropType
): Promise<TreeDataPropType> => {
  if (treeState.treeNodes.length) {
    treeState.treeNodes.map(
      async (treeNode: TreeNodePropsType, treeNodeIdx: number) => {
        if (Number(treeNode.id) === treeNodeID) {
          //
          // flip `isExpanded` property
          //

          treeNode.isExpanded = !treeNode.isExpanded;

          //
          // update `totalExpandedTreeNodesCount`
          //

          treeState.treeNodes[treeNodeIdx].isExpanded
            ? (treeState.totalExpandedTreeNodes =
                treeState.totalExpandedTreeNodes + 1)
            : (treeState.totalExpandedTreeNodes =
                treeState.totalExpandedTreeNodes - 1);

          //
          // construct new `treeState` object
          //

          treeState = Object.assign({}, treeState, {
            treeNodes: [...treeState.treeNodes],
          });

          treeState.treeNodes[treeNodeIdx] = treeNode;

          return Promise.resolve(treeState);
        }

        return Promise.resolve(treeState);
      }
    );
  }

  //
  // construct and return new treeState
  //

  return Promise.resolve(treeState);
};

/* ------------------------------------------------------------------------------------ *
 *                                                                                      *
 *  Exports                                                                             *
 *                                                                                      *
 * ------------------------------------------------------------------------------------ */

export { constructNewTreeNodeStateObject };
