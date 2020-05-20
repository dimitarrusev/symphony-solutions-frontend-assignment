/* ------------------------------------------------------------------------------------ *
 *                                                                                      *
 *  Imports                                                                             *
 *                                                                                      *
 * ------------------------------------------------------------------------------------ */

// Types
import { TreeDataPropType } from "../types";

// Helpers
import { calculateTotalExpandableTreeNodes } from "./calculateTotalExpandableTreeNodes";
import { calculateTotalExpandedTreeNodes } from "./calculateTotalExpandedTreeNodes";

/* ------------------------------------------------------------------------------------ *
 *                                                                                      *
 *  Helper                                                                              *
 *                                                                                      *
 * ------------------------------------------------------------------------------------ *
 *                                                                                      *
 * constructNewTreeState                                                                *
 *                                                                                      *
 * constructs and returns new tree state.                                               *
 *                                                                                      *
 * ------------------------------------------------------------------------------------ */

const constructNewTreeState = (
  currentTreeState: TreeDataPropType
): TreeDataPropType => {
  const newTreeState = Object.assign({}, currentTreeState, {
    totalExpandableTreeNodes: calculateTotalExpandableTreeNodes(
      currentTreeState
    ),
    totalExpandedTreeNodes: calculateTotalExpandedTreeNodes(currentTreeState),
  });

  return newTreeState;
};

/* ------------------------------------------------------------------------------------ *
 *                                                                                      *
 *  Exports                                                                             *
 *                                                                                      *
 * ------------------------------------------------------------------------------------ */

export { constructNewTreeState };
