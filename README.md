![Symphony Solutions Logo](http://www.topdesignfirms.com/pub/companyLogo/20180316081014_symphonylogo.png)

# Frontend Assignment for Symphony Solutions

**NOTES TO THE REVIEWER**: have yet to be written (hopefully on time) as i have to get some shut-eye badly...

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
  - [Available scripts](#available-scripts)
  - [Tree component](#tree-component)
    - [Imperative API](#imperative-api)
    - [Declarative API](#declarative-api)

## Installation

You'll need to have the following dependencies installed on your system:

- [Node.js](https://nodejs.org/) **v12.16.1** (or higher)
- [Yarn](https://classic.yarnpkg.com/) **v1.22.0** (or higher)

## Usage

Once you have the repo cloned and dependencies installed (by executning the `yarn` or `yarn install` command): 

1. Spin up the mock REST API server in one terminal window by executing `yarn start:api` command
2. Spin up the local development server in another terminal window by executing `yarn start:app` command

Then, in your browser, you can navigate to `http://localhost:8080/` to view the app!

### Available scripts

| **script**                 | **description**                                                                          |
| -------------------------- | ---------------------------------------------------------------------------------------- |
| `yarn start:api`           | Spins up [mock REST API server](https://github.com/typicode/json-server). \*available at [http://localhost:3000/data](http://localhost:3000/data).
| `yarn start:app`           | Spins up [local development server](https://webpack.js.org/configuration/dev-server/). \*available at [http://localhost:8080/](http://localhost:8080/) \*defaults to `yarn start:app:dev`.
| `yarn start:app:dev`       | Spins up [local development server](https://webpack.js.org/configuration/dev-server/). \*available at [http://localhost:8080/](http://localhost:8080/) \*sets `NODE_ENV` to `development`.
| `yarn start:app:prod`      | Spins up [local development server](https://webpack.js.org/configuration/dev-server/). \*available at [http://localhost:8080/](http://localhost:8080/) \*sets `NODE_ENV` to `production`.
| `yarn build:app`           | Builds the app and outputs the assets in `./dist`. \*defaults to `yarn build:app:prod`.
| `yarn build:app:dev`       | Builds the app and outputs the assets in `./dist`. \*sets `NODE_ENV` to `development`.   |
| `yarn build:app:prod`      | Builds the app and outputs the assets in `./dist`. \*sets `NODE_ENV` to `production`.    |

### Tree component

Tree component offers two APIs — Declarative and Imperative:

#### Imperative API

```jsx
  <h3>Imperative API Example:</h3>
  <Tree data={data} />
```

#### Declarative API

**IMPORTANT**: This is not working for the time being, **needs to be re-written**!

```jsx
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
        <TreeNode key="231" id="231" label="Item 2-3-1" isExpanded={false} />

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
        <TreeNode key="233" id="233" label="Item 2-3-3" isExpanded={false} />
      </TreeNode>
    </TreeNode>

    {/* <!-- Item 3 --> */}
    <TreeNode key="3" id="3" label="Item 3" isExpanded={false} />

    {/* <!-- Item 4 --> */}
    <TreeNode key="4" id="4" label="Item 4" isExpanded={false} />
  </Tree>
```
