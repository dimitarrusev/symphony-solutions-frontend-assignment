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
import { toggleAllTreeNodes } from "../utils/helpers";

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

      {treeState.isLoading ? (
        <h4>Loading...</h4>
      ) : (
        <Tree data={treeState.treeNodes} />
      )}

      <br />

      {treeState.totalExpandableTreeNodes - treeState.totalExpandedTreeNodes >=
      1 ? (
        <Button
          icon="plus"
          onClick={() => {
            const currTreeState = cloneDeep(treeState);
            const newTreeState = toggleAllTreeNodes(currTreeState);
            setTreeState(newTreeState);
          }}
        >
          Expand all
        </Button>
      ) : (
        treeState.totalExpandedTreeNodes ===
          treeState.totalExpandableTreeNodes && (
          <Button
            icon="minus"
            onClick={() => {
              const currTreeState = cloneDeep(treeState);
              const newTreeState = toggleAllTreeNodes(currTreeState, false);
              setTreeState(newTreeState);
            }}
          >
            Collapse all
          </Button>
        )
      )}
    </>
  );
};

/* ------------------------------------------------------------------------------------ *
 *                                                                                      *
 *  Exports                                                                             *
 *                                                                                      *
 * ------------------------------------------------------------------------------------ */

export default App;
