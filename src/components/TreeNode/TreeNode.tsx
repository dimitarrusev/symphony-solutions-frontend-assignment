/* ------------------------------------------------------------------------------------ *
 *                                                                                      *
 *  Imports                                                                             *
 *                                                                                      *
 * ------------------------------------------------------------------------------------ */

// Vendor
import React, { ReactElement, useState } from "react";
import { MdExpandLess, MdExpandMore } from "react-icons/md";

// Types
import {
  TreeDataPropType,
  TreeNodePropsType,
  TreeNodeIsExpandedPropType,
} from "../../utils/types";

// Context
import { useTree } from "../../context";

// Components
import StyledTree from "../Tree/StyledTree";
import StyledTreeNode from "./StyledTreeNode";

// Helpers
import { constructNewTreeNodeStateObject } from "../../utils/helpers";

/* ------------------------------------------------------------------------------------ *
 *                                                                                      *
 * Component                                                                            *
 *                                                                                      *
 * ------------------------------------------------------------------------------------ */

const TreeNode: React.FC<TreeNodePropsType> = ({
  id,
  label,
  nodeChildren = [],
  isExpanded,
  children,
}): ReactElement => {
  const { treeState, setTreeState } = useTree();

  const [treeNodeState, setTreeNodeState] = useState<
    TreeNodeIsExpandedPropType
  >(isExpanded ? "is-expanded" : "is-collapsed");

  const toggleTreeNodeState = async (
    treeNodeID: number,
    treeNodeState: TreeNodeIsExpandedPropType,
    treeState: TreeDataPropType
  ) => {
    const newTreeState = await constructNewTreeNodeStateObject(
      treeNodeID,
      treeState
    );

    setTreeState(newTreeState);
    setTreeNodeState(
      treeNodeState === "is-expanded" ? "is-collapsed" : "is-expanded"
    );
  };

  const treeNodeClassName = Boolean(nodeChildren.length)
    ? `${Boolean(nodeChildren.length) && "has-children"} ${
        Boolean(nodeChildren.length) &&
        Boolean(treeNodeState === "is-expanded") &&
        "is-expanded"
      }`
    : Boolean(React.Children.toArray(children).length) &&
      `${
        Boolean(React.Children.toArray(children).length) ? "has-children" : ""
      } ${
        Boolean(React.Children.toArray(children).length) &&
        treeNodeState === "is-expanded"
          ? "is-expanded"
          : ""
      }`;

  return (
    <StyledTreeNode key={id} className={treeNodeClassName}>
      {/* Label & Icon Wrapper */}
      <div className="label-and-icon-wrapper">
        {/* Label */}
        <span className="label">{label}</span>

        {/* Icon */}
        {Boolean(
          nodeChildren.length
        ) /* IF `nodeChildren.length` is  truthy => using imperative API */ ? (
          <span
            className="icon"
            onClick={() =>
              toggleTreeNodeState(Number(id), treeNodeState, treeState)
            }
          >
            {treeNodeState === "is-expanded" ? (
              <MdExpandLess />
            ) : (
              <MdExpandMore />
            )}
          </span>
        ) : (
          /* ELSE (`nodeChildren.length` is falsy) => using declarative API */
          Boolean(React.Children.toArray(children).length) && (
            <span
              className="icon"
              onClick={() =>
                toggleTreeNodeState(Number(id), treeNodeState, treeState)
              }
            >
              {treeNodeState === "is-expanded" ? (
                <MdExpandLess />
              ) : (
                <MdExpandMore />
              )}
            </span>
          )
        )}
      </div>

      {/* Children */}
      {Boolean(nodeChildren.length) ? (
        <StyledTree className="children-wrapper">
          {nodeChildren.map(({ id, label, nodeChildren, isExpanded }) => (
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
        Boolean(React.Children.toArray(children).length) && (
          <StyledTree className="children-wrapper">{children}</StyledTree>
        )
      )}
    </StyledTreeNode>
  );
};

/* ------------------------------------------------------------------------------------ *
 *                                                                                      *
 *  Exports                                                                             *
 *                                                                                      *
 * ------------------------------------------------------------------------------------ */

export default TreeNode;
