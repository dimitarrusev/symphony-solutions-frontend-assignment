/* ------------------------------------------------------------------------------------ *
 *                                                                                      *
 *  Imports                                                                             *
 *                                                                                      *
 * ------------------------------------------------------------------------------------ */

// Vendor
import { createContext, useContext } from "react";

// Types
import { TreeContextType } from "../utils/types";

/* ------------------------------------------------------------------------------------ *
 *                                                                                      *
 *  Wrapper                                                                             *
 *                                                                                      *
 * ------------------------------------------------------------------------------------ */

function createContextWrapper<TreeContextType>() {
  const context = createContext<TreeContextType | undefined>(undefined);

  function useCtx() {
    const ctx = useContext(context);

    //
    // TODO: Fix this!
    //

    // if (!ctx) {
    //   throw new Error("`useCtx` must be within a `Provider` and must have a value!");
    // }

    return ctx;
  }

  return [useCtx, context.Provider] as const;
}

/* ------------------------------------------------------------------------------------ *
 *                                                                                      *
 *  Exports                                                                             *
 *                                                                                      *
 * ------------------------------------------------------------------------------------ */

export { createContextWrapper };
