// Vendor
import React, { useState, ReactElement } from "react";
import { MdExpandLess, MdExpandMore } from "react-icons/md";

// Components
import StyledTree from "../Tree/StyledTree";
import StyledTreeNode from "./StyledTreeNode";

// Types
type TreeNodeProps = {
  id: string;
  label: string;
  isExpanded?: boolean;
  children?: any[];
};

type TreeNodeState = "is-expanded" | "is-collapsed";

const TreeNode: React.FC<TreeNodeProps> = ({
  id,
  label,
  children = [],
  isExpanded,
}): ReactElement => {
  const [treeNodeState, setTreeNodeState] = useState<TreeNodeState>(
    isExpanded ? "is-expanded" : "is-collapsed"
  );

  const treeNodeClassName = `${children.length ? "has-children" : ""} ${
    children.length && treeNodeState === "is-expanded" ? "is-expanded" : ""
  }`;

  const toggleTreeNodeState = () =>
    treeNodeState === "is-expanded"
      ? setTreeNodeState("is-collapsed")
      : setTreeNodeState("is-expanded");

  return (
    <StyledTreeNode key={id} className={treeNodeClassName}>
      {/* Label & Icon Wrapper */}
      <div className="label-and-icon-wrapper">
        {/* Label */}
        <span className="label">{label}</span>

        {/* Icon */}
        {Boolean(children.length) && (
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
      {Boolean(children.length) && (
        <StyledTree className="children-wrapper">
          {children.map(({ id, label, children, isExpanded }) => (
            <TreeNode
              key={id}
              id={id}
              label={label}
              children={children}
              isExpanded={isExpanded}
            />
          ))}
        </StyledTree>
      )}
    </StyledTreeNode>
  );
};

export default TreeNode;
