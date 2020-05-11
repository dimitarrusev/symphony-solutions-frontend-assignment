// Vendor
import React, { ReactElement } from "react";
import { MdExpandLess, MdExpandMore } from "react-icons/md";

// Components
import StyledTree from "../Tree/StyledTree";
import StyledTreeNode from "./StyledTreeNode";

// Hooks
import { useTreeNode } from "./";

// Types
export type TreeNodeProps = {
  id: string;
  label: string;
  isExpanded?: boolean;
  nodeChildren?: any[];
};

export type TreeNodeState = "is-expanded" | "is-collapsed";

// Component
export const TreeNode: React.FC<TreeNodeProps> = ({
  id,
  label,
  nodeChildren = [],
  isExpanded,
  children,
}): ReactElement => {
  const [treeNodeState, toggleTreeNodeState] = useTreeNode(
    isExpanded ? "is-expanded" : "is-collapsed"
  );

  const treeNodeClassName = Boolean(nodeChildren.length)
    ? `${nodeChildren.length ? "has-children" : ""} ${
        nodeChildren.length && treeNodeState === "is-expanded"
          ? "is-expanded"
          : ""
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
          <span className="icon" onClick={toggleTreeNodeState}>
            {treeNodeState === "is-expanded" ? (
              <MdExpandLess />
            ) : (
              <MdExpandMore />
            )}
          </span>
        ) : (
          /* ELSE (`nodeChildren.length` is falsy) => using declarative API */
          Boolean(React.Children.toArray(children).length) && (
            <span className="icon" onClick={toggleTreeNodeState}>
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
