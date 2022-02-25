import React from "react";
import styled from "styled-components";

const StyledHeading3 = styled.h3`
  font-size: ${(props) => props.theme.headings.h3.fontSize};
  font-weight: ${(props) => props.theme.headings.h3.fontWeight};
`;

const Heading3 = ({ children }) => {
  return <StyledHeading3>{children}</StyledHeading3>;
};

export default Heading3;
