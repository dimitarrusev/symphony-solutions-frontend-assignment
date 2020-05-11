// Vendor
import React, { useState, useEffect } from "react";

// Components
import { Tree } from "../components/Tree";
import { TreeNode } from "../components/TreeNode";

// Styles
import { GlobalStyle } from "../styles";

const App = () => {
  const [treeData, setTreeData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<Boolean>(false);

  useEffect(() => {
    setIsLoading(true);

    const fetchData = async () => {
      const response = await fetch("http://localhost:3000/data");
      const data = await response.json();

      setTreeData(data);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return (
    <>
      <GlobalStyle />

      <h3>Imperative API Example:</h3>

      {isLoading ? <h4>Loading...</h4> : <Tree data={treeData} />}

      <br />

      <h3>Declarative API Example:</h3>
      <Tree>
        {/* <!-- Item 1 --> */}
        <TreeNode key="1" id="1" label="Item 1" isExpanded={false} />

        {/* <!-- Item 2 --> */}
        <TreeNode key="2" id="2" label="Item 2" isExpanded={false}>
          {/* <!-- Item 2-1 --> */}
          <TreeNode key="21" id="21" label="Item 2-1" isExpanded={false} />

          {/* <!-- Item 2-2 --> */}
          <TreeNode key="22" id="22" label="Item 2-2" isExpanded={false} />

          {/* <!-- Item 2-3 --> */}
          <TreeNode key="23" id="23" label="Item 2-3" isExpanded={false}>
            {/* <!-- Item 2-3-1 --> */}
            <TreeNode
              key="231"
              id="231"
              label="Item 2-3-1"
              isExpanded={false}
            />

            {/* <!-- Item 2-3-2 --> */}
            <TreeNode key="232" id="232" label="Item 2-3-2" isExpanded={false}>
              {/* <!-- Item 2-3-2-1 --> */}
              <TreeNode
                key="2321"
                id="2321"
                label="Item 2-3-2-1"
                isExpanded={false}
              />

              {/* <!-- Item 2-3-2-2 --> */}
              <TreeNode
                key="2322"
                id="2322"
                label="Item 2-3-2-2"
                isExpanded={false}
              >
                {/* <!-- Item 2-3-2-2-1 --> */}
                <TreeNode
                  key="23221"
                  id="23221"
                  label="Item 2-3-2-2-1"
                  isExpanded={false}
                />

                {/* <!-- Item 2-3-2-2-2 --> */}
                <TreeNode
                  key="23222"
                  id="23222"
                  label="Item 2-3-2-2-2"
                  isExpanded={false}
                />
              </TreeNode>

              {/* <!-- Item 2-3-2-3 --> */}
              <TreeNode
                key="2323"
                id="2323"
                label="Item 2-3-2-3"
                isExpanded={false}
              />
            </TreeNode>

            {/* <!-- Item 2-3-3 --> */}
            <TreeNode
              key="233"
              id="233"
              label="Item 2-3-3"
              isExpanded={false}
            />
          </TreeNode>
        </TreeNode>

        {/* <!-- Item 3 --> */}
        <TreeNode key="3" id="3" label="Item 3" isExpanded={false} />

        {/* <!-- Item 4 --> */}
        <TreeNode key="4" id="4" label="Item 4" isExpanded={false} />
      </Tree>
    </>
  );
};

export default App;
