/* ------------------------------------------------------------------------------------ *
 *                                                                                      *
 *  Imports                                                                             *
 *                                                                                      *
 * ------------------------------------------------------------------------------------ */

// Vendor
import styled from "styled-components";

// Styles
import { colors } from "../../styles";

/* ------------------------------------------------------------------------------------ *
 *                                                                                      *
 *  Component                                                                           *
 *                                                                                      *
 * ------------------------------------------------------------------------------------ */

const StyledButton = styled.a`
  padding: 1rem 2rem;

  display: flex;
  justify-content: space-between;
  vertical-align: middle;

  width: 100%;
  height: max-content;

  color: ${colors.white};
  font-size: 2.2rem;
  font-weight: bold;

  background-color: ${colors.lightGreen};

  border-radius: 0.6rem;

  cursor: pointer;

  .icon {
    display: flex;
    align-self: center;

    color: ${colors.ultralightGreen};
  }

  &:hover {
    background-color: ${colors.mediumGreen};
  }

  &:active {
    background-color: ${colors.darkGreen};
  }
`;

/* ------------------------------------------------------------------------------------ *
 *                                                                                      *
 *  Exports                                                                             *
 *                                                                                      *
 * ------------------------------------------------------------------------------------ */

export default StyledButton;
