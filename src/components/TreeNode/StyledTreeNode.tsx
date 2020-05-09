// Vendor
import styled from "styled-components";

// Styles
import { colors } from "../../styles";

const StyledTreeNode = styled.li`
  display: flex;
  flex-direction: column;
  list-style: none;

  padding: 0 1.6rem;

  background-color: transparent;
  border-radius: 0.3rem;

  /*
  // Elements
  */

  > .label-and-icon-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    width: 100%;
    height: auto;

    .label {
      color: ${() => colors.black};
    }

    .icon {
      display: flex;
      align-self: center;

      svg {
        fill: ${() => colors.lightBlue};
        font-size: 2rem;
      }
    }
  }

  > .children-wrapper {
    height: 0;

    opacity: 0;

    visibility: hidden;
  }

  /*
  // States
  */

  &.has-children {
    &.is-expanded {
      padding: 0 1.6rem 1rem 1.6rem;
    }

    &:hover {
      cursor: pointer;
    }
  }

  &.is-expanded {
    > .children-wrapper {
      height: auto;

      opacity: 1;

      visibility: visible;
    }

    > .label-and-icon-wrapper {
      .icon {
        svg {
          fill: ${() => colors.mediumBlue};
        }
      }
    }
  }

  &:hover {
    background-color: ${() => colors.ultralightBlue};
  }
`;

export default StyledTreeNode;
