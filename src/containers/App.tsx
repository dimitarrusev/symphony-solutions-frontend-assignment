/* ------------------------------------------------------------------------------------ *
 *                                                                                      *
 *  Imports                                                                             *
 *                                                                                      *
 * ------------------------------------------------------------------------------------ */

// Vendor
import React from "react";

// Context
import { useTree, TreeContextProvider } from "../context";

// Components
import { Tree } from "../components/Tree";

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
