import React from "react";
import { Default, Contained, Outlined } from "./Button.style";
const Button = ({ children, variant, ...otherProps }) => {
  if (variant === "outlined") {
    return <Outlined {...otherProps}>{children}</Outlined>;
  }
  if (variant === "contained") {
    return <Contained {...otherProps}>{children}</Contained>;
  }
  return <Default {...otherProps}>{children}</Default>;
};

export default Button;
