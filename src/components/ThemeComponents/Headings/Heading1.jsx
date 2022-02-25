import React from "react";
import styled from "styled-components";

const StyledHeading1 = styled.h1`
  font-size: ${(props) => props.theme.headings.h1.fontSize};
  font-weight: ${(props) => props.theme.headings.h1.fontWeight};
`;

const Heading1 = ({ children }) => {
  return <StyledHeading1>{children}</StyledHeading1>;
};

export default Heading1;
