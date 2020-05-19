/* ------------------------------------------------------------------------------------ *
 *                                                                                      *
 *  Imports                                                                             *
 *                                                                                      *
 * ------------------------------------------------------------------------------------ */

import { ReactNode } from "react";

/* ------------------------------------------------------------------------------------ *
 *                                                                                      *
 *  Types                                                                               *
 *                                                                                      *
 * ------------------------------------------------------------------------------------ */

type TreePropsType = {
  data?: any[];
};

type TreeDataPropType = {
  isLoading: boolean;
  setIsLoading: (value: boolean) => void;
  treeNodes: TreeNodePropsType[];
  totalExpandableTreeNodes: number;
  totalExpandedTreeNodes: number;
};

type TreeNodePropsType = {
  id: string;
  label: string;
  isExpanded?: boolean;
  nodeChildren?: TreeNodePropsType[];
};

type TreeNodeIsExpandedPropType = "is-expanded" | "is-collapsed";

type TreeContextType = {
  isLoading: boolean;
  setIsLoading: (value: boolean) => void;
  treeState: TreeDataPropType;
  setTreeState: (value: TreeDataPropType) => void;
};

type TreeContextProviderPropsType = {
  children: ReactNode;
};

type ButtonPropsType = {
  className?: string;
  onClick?: any;
  children: ReactNode;
  href?: string;
  icon?: "plus" | "minus";
};

/* ------------------------------------------------------------------------------------ *
 *                                                                                      *
 *  Exports                                                                             *
 *                                                                                      *
 * ------------------------------------------------------------------------------------ */

export {
  TreePropsType,
  TreeDataPropType,
  TreeNodePropsType,
  TreeNodeIsExpandedPropType,
  TreeContextType,
  TreeContextProviderPropsType,
  ButtonPropsType,
};
