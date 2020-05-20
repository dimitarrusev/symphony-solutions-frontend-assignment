/* ------------------------------------------------------------------------------------ *
 *                                                                                      *
 *  Imports                                                                             *
 *                                                                                      *
 * ------------------------------------------------------------------------------------ */

// Vendor
import React, { ReactElement } from "react";
import { MdExpandLess, MdExpandMore } from "react-icons/md";
import cloneDeep from "lodash/cloneDeep";

// Types
import { TreeNodePropsType } from "../../utils/types";

// Context
import { useTree } from "../../context";

// Components
import StyledTree from "../Tree/StyledTree";
import StyledTreeNode from "./StyledTreeNode";

// Helpers
import { toggleTreeNode } from "../../utils/helpers";

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
  const { isLoading, setIsLoading, treeState, setTreeState } = useTree();

  const toggleTreeNodeState = () => {
    const currTreeState = cloneDeep(treeState);
    const newTreeState = toggleTreeNode(
      Number(id),
      isExpanded ? false : true,
      currTreeState
    );
  };

  const treeNodeClassName = Boolean(nodeChildren.length)
    ? `${Boolean(nodeChildren.length) && "has-children"} ${
        Boolean(nodeChildren.length) && isExpanded
          ? "is-expanded"
          : "is-collapsed"
      }`
    : Boolean(React.Children.toArray(children).length) &&
      `${
        Boolean(React.Children.toArray(children).length) ? "has-children" : ""
      } ${
        Boolean(React.Children.toArray(children).length) && isExpanded
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
          <span className="icon" onClick={() => toggleTreeNodeState()}>
            {isExpanded ? <MdExpandLess /> : <MdExpandMore />}
          </span>
        ) : (
          /* ELSE (`nodeChildren.length` is falsy) => using declarative API */
          Boolean(React.Children.toArray(children).length) && (
            <span className="icon" onClick={() => toggleTreeNodeState()}>
              {isExpanded ? <MdExpandLess /> : <MdExpandMore />}
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
