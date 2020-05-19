/* ------------------------------------------------------------------------------------ *
 *                                                                                      *
 *  Imports                                                                             *
 *                                                                                      *
 * ------------------------------------------------------------------------------------ */

// Vendor
import React, { ReactElement } from "react";

// Types
import { TreePropsType } from "../../utils/types";

// Context
import { useTree } from "../../context";

// Components
import StyledTree from "./StyledTree";
import { TreeNode } from "../TreeNode";

/* ------------------------------------------------------------------------------------ *
 *                                                                                      *
 * Component                                                                            *
 *                                                                                      *
 * ------------------------------------------------------------------------------------ */

const Tree: React.FC<TreePropsType> = ({ data, children }): ReactElement => {
  const { isLoading, setIsLoading, treeState, setTreeState } = useTree();
  const useImperativeAPI = data && !children;

  return (
    <>
      {useImperativeAPI ? (
        <StyledTree>
          {data.map(({ id, label, nodeChildren, isExpanded }) => (
            <TreeNode
              key={id}
              id={id}
              label={label}
              nodeChildren={nodeChildren}
              isExpanded={isExpanded}
            />
          ))}
        </StyledTree>
      ) : (
        <StyledTree>{children}</StyledTree>
      )}
    </>
  );
};

/* ------------------------------------------------------------------------------------ *
 *                                                                                      *
 *  Exports                                                                             *
 *                                                                                      *
 * ------------------------------------------------------------------------------------ */

export { Tree };
