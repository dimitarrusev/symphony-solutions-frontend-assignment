// Vendor
import React, { ReactElement } from "react";

// Components
import StyledTree from "./StyledTree";
import TreeNode from "../TreeNode";

// Types
export type TreeProps = {
  data?: any[];
};

const Tree: React.FC<TreeProps> = ({ data, children }): ReactElement => {
  const useImperativeAPI = data && !children;

  return (
    <>
      {useImperativeAPI ? (
        <StyledTree>
          {data.map(({ id, label, children, isExpanded }) => (
            <TreeNode
              key={id}
              id={id}
              label={label}
              children={children}
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

export default Tree;
