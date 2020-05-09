// Vendor
import { createGlobalStyle } from "styled-components";

// Styles
import { colors, typography } from "../abstracts";

const GlobalStyle = createGlobalStyle`
  /* -------------------------------------------------------------- *
  //
  // Reset / Normalize HTML elements
  //
  // -------------------------------------------------------------- */
  /*
  // Document
  //
  // change 'box-sizing' from 'content-box' to 'border-box' (to make
  // sure that 'width' is not affected by 'padding' or 'border') and
  // remove 'margin' and 'padding' from all elements.
  */

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  /*
  // Root
  //
  // Ability to the value of the root font sizes, affecting the
  // value of 'rem'.
  */

  :root {
    font-size: ${typography.fontSizeRoot};
  }

  html,
  body {
    width: 100%;
    height: 100%;
  }

  body {
    padding: 2.5rem;

    font-family: ${typography.fontFamily};
    font-size: 1.6rem;
    font-weight: 400;
    line-height: calc(1.6rem * 2);

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    text-decoration: none;
    color: ${colors.blue};
  }

  ol,
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  button {
    /* override user agent styles */
    font-family: inherit;
    font-size: 1.6rem;
  }
`;

export { GlobalStyle };
