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
import Button from "../Button";

/* ------------------------------------------------------------------------------------ *
 *                                                                                      *
 * Component                                                                            *
 *                                                                                      *
 * ------------------------------------------------------------------------------------ */

const Tree: React.FC<TreePropsType> = ({ data, children }): ReactElement => {
  const { treeState, setTreeState } = useTree();
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

      <br />

      {treeState.totalExpandableTreeNodes - treeState.totalExpandedTreeNodes >=
      1 ? (
        <Button icon="plus">Expand all</Button>
      ) : (
        treeState.totalExpandedTreeNodes ===
          treeState.totalExpandableTreeNodes && (
          <Button icon="minus">Collapse all</Button>
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

export { Tree };
