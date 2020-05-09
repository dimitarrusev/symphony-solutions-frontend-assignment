// Vendor
import React, { useState, ReactElement } from "react";
import { MdExpandLess, MdExpandMore } from "react-icons/md";

// Components
import StyledTreeNode from "./StyledTreeNode";

// Types
type TreeNodeProps = {
  label: string;
  hasChildren?: boolean;
  isExpanded?: boolean;
};

type TreeNodeState = "is-expanded" | "is-collapsed";

const TreeNode: React.FC<TreeNodeProps> = ({
  label,
  hasChildren,
  isExpanded,
  children,
}): ReactElement => {
  const [treeNodeState, setTreeNodeState] = useState<TreeNodeState>(
    isExpanded ? "is-expanded" : "is-collapsed"
  );

  const treeNodeClassName = `${hasChildren ? "has-children" : ""} ${
    hasChildren && treeNodeState === "is-expanded" ? "is-expanded" : ""
  }`;

  const toggleTreeNodeState = () =>
    treeNodeState === "is-expanded"
      ? setTreeNodeState("is-collapsed")
      : setTreeNodeState("is-expanded");

  return (
    <StyledTreeNode className={treeNodeClassName}>
      {/* Label & Icon Wrapper */}
      <div className="label-and-icon-wrapper">
        {/* Label */}
        <span className="label">{label}</span>

        {/* Icon */}
        {hasChildren && (
          <span className="icon" onClick={toggleTreeNodeState}>
            {treeNodeState === "is-expanded" ? (
              <MdExpandLess />
            ) : (
              <MdExpandMore />
            )}
          </span>
        )}
      </div>

      {/* Children */}
      {hasChildren && <ul className="children-wrapper">{children}</ul>}
    </StyledTreeNode>
  );
};

export default TreeNode;
