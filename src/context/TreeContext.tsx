/* ------------------------------------------------------------------------------------ *
 *                                                                                      *
 *  Imports                                                                             *
 *                                                                                      *
 * ------------------------------------------------------------------------------------ */

// Vendor
import React, { createContext, useState, useEffect } from "react";

// Types
import { TreeContextType, TreeContextProviderPropsType } from "../utils/types";

// Helpers
import { createContextWrapper } from "./createContextWrapper";
import { constructNewTreeState } from "../utils/helpers";

const [useTree, CtxProvider] = createContextWrapper<TreeContextType>();

/* ------------------------------------------------------------------------------------ *
 *                                                                                      *
 *  Context                                                                             *
 *                                                                                      *
 * ------------------------------------------------------------------------------------ */

const TreeContext = createContext<TreeContextType | undefined>(undefined);

/* ------------------------------------------------------------------------------------ *
 *                                                                                      *
 *  Provider                                                                            *
 *                                                                                      *
 * ------------------------------------------------------------------------------------ */

const TreeContextProvider = ({ children }: TreeContextProviderPropsType) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [treeState, setTreeState] = useState({
    isLoading: true,
    setIsLoading,
    treeNodes: [],
    totalExpandableTreeNodes: 0,
    totalExpandedTreeNodes: 0,
  });

  useEffect(() => {
    setIsLoading(true);

    const fetchData = async () => {
      const response = await fetch("http://localhost:3000/data");
      const data = await response.json();

      const newTreeState = await constructNewTreeState({
        isLoading: false,
        setIsLoading: () => {},
        treeNodes: data,
        totalExpandableTreeNodes: 0,
        totalExpandedTreeNodes: 0,
      });

      setTreeState(newTreeState);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return (
    <CtxProvider value={{ isLoading, setIsLoading, treeState, setTreeState }}>
      {children}
    </CtxProvider>
  );
};

/* ------------------------------------------------------------------------------------ *
 *                                                                                      *
 *  Exports                                                                             *
 *                                                                                      *
 * ------------------------------------------------------------------------------------ */

export { TreeContext, TreeContextProvider, useTree };
