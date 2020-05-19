/* ------------------------------------------------------------------------------------ *
 *                                                                                      *
 *  Imports                                                                             *
 *                                                                                      *
 * ------------------------------------------------------------------------------------ */

// Vendor
import React from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

// Types
import { ButtonPropsType } from "../../utils/types";

// Components
import StyledButton from "./StyledButton";

/* ------------------------------------------------------------------------------------ *
 *                                                                                      *
 * Component                                                                            *
 *                                                                                      *
 * ------------------------------------------------------------------------------------ */

const Button = ({
  className,
  onClick,
  href,
  icon,
  children,
}: ButtonPropsType) => {
  return (
    <StyledButton className={className} href={href} onClick={onClick}>
      <span className="label">{children}</span>

      {icon === "plus" ? (
        <FaPlus className="icon" />
      ) : (
        <FaMinus className="icon" />
      )}
    </StyledButton>
  );
};

/* ------------------------------------------------------------------------------------ *
 *                                                                                      *
 *  Exports                                                                             *
 *                                                                                      *
 * ------------------------------------------------------------------------------------ */

export default Button;
