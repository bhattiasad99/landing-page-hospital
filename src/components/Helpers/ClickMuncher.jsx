import React from "react";

const ClickMuncher = ({ children }) => {
  return <span onClick={(e) => e.stopPropagation()}>{children}</span>;
};

export default ClickMuncher;
