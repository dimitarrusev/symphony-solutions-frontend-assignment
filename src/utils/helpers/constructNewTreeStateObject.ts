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

const constructNewTreeStateObject = async (
  jsonData: any,
  isLoading: boolean,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
  treeState: TreeDataPropType,
  setTreeState: React.Dispatch<
    React.SetStateAction<{
      isLoading: boolean;
      setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
      treeNodes: any[];
      totalExpandableTreeNodes: number;
      totalExpandedTreeNodes: number;
    }>
  >
): Promise<TreeDataPropType> => {
  let totalExpandableTreeNodesCount = 0;
  let totalExpandedTreeNodesCount = 0;

  const recursivelyTraverseData = async (
    data: TreeNodePropsType[]
  ): Promise<TreeDataPropType> => {
    const filteredData = data.filter(
      (item: TreeNodePropsType) => item.nodeChildren
    );

    if (Boolean(filteredData.length)) {
      filteredData.map(async (item: TreeNodePropsType) => {
        //
        // update `totalExpandableTreeNodesCount`
        //

        totalExpandableTreeNodesCount = totalExpandableTreeNodesCount + 1;

        //
        // update `totalExpandedTreeNodesCount`
        //

        item.isExpanded &&
          (totalExpandedTreeNodesCount = totalExpandedTreeNodesCount + 1);

        //
        // proceed with traversing items subchildren
        //

        await recursivelyTraverseData(item.nodeChildren);
      });
    }

    //
    // construct and return new treeState
    //

    const newTreeState = Object.assign({}, treeState, {
      isLoading: false,
      setIsLoading: false,
      treeNodes: data,
      totalExpandableTreeNodes: totalExpandableTreeNodesCount,
      totalExpandedTreeNodes: totalExpandedTreeNodesCount,
    });

    return Promise.resolve(newTreeState);
  };

  const newTreeState = await recursivelyTraverseData(jsonData);

  return Promise.resolve(newTreeState);
};

/* ------------------------------------------------------------------------------------ *
 *                                                                                      *
 *  Exports                                                                             *
 *                                                                                      *
 * ------------------------------------------------------------------------------------ */

export { constructNewTreeStateObject };
