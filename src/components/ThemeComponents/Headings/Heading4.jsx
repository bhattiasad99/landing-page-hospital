import React from "react";
import styled from "styled-components";

const StyledHeading4 = styled.h4`
  font-size: ${(props) => props.theme.headings.h4.fontSize};
  font-weight: ${(props) => props.theme.headings.h4.fontWeight};
`;

const Heading4 = ({ children }) => {
  return <StyledHeading4>{children}</StyledHeading4>;
};

export default Heading4;
