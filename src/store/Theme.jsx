import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "../helpers/config";

const Theme = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
