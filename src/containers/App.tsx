/* ------------------------------------------------------------------------------------ *
 *                                                                                      *
 *  Imports                                                                             *
 *                                                                                      *
 * ------------------------------------------------------------------------------------ */

// Vendor
import React from "react";
import cloneDeep from "lodash/cloneDeep";

// Context
import { useTree, TreeContextProvider } from "../context";

// Components
import { Tree } from "../components/Tree";
import Button from "../components/Button";

// Helpers
import { expandAllTreeNodes } from "../utils/helpers";

// Styles
import { GlobalStyle } from "../styles";

/* ------------------------------------------------------------------------------------ *
 *                                                                                      *
 * Component                                                                            *
 *                                                                                      *
 * ------------------------------------------------------------------------------------ */

const App = () => {
  const { treeState, setTreeState } = useTree();

  return (
    <>
      <GlobalStyle />

      <h3>Imperative API Example:</h3>

      <br />

      <TreeContextProvider>
        {treeState.isLoading ? (
          <h4>Loading...</h4>
        ) : (
          <Tree data={treeState.treeNodes} />
        )}

        <br />

        {treeState.totalExpandableTreeNodes -
          treeState.totalExpandedTreeNodes >=
        1 ? (
          <Button
            icon="plus"
            onClick={() => {
              console.log("Current tree state:", treeState);

              const currTreeState = cloneDeep(treeState);
              const newTreeState = expandAllTreeNodes(currTreeState);
              setTreeState(newTreeState);

              console.log("New tree state:", newTreeState);
            }}
          >
            Expand all
          </Button>
        ) : (
          treeState.totalExpandedTreeNodes ===
            treeState.totalExpandableTreeNodes && (
            <Button icon="minus">Collapse all</Button>
          )
        )}

        {/* <br />
        <button
          onClick={() => {
            let currTreeState = cloneDeep(treeState);
            currTreeState.treeNodes[1].isExpanded = true;
            console.log(currTreeState);
            // let newTreeState = expandAllTreeNodes(currTreeState);
            setTreeState(currTreeState);
          }}
        >
          debugging
        </button> */}
      </TreeContextProvider>
    </>
  );
};

/* ------------------------------------------------------------------------------------ *
 *                                                                                      *
 *  Exports                                                                             *
 *                                                                                      *
 * ------------------------------------------------------------------------------------ */

export default App;
