import React from "react";
import styled from "styled-components";

const StyledHeading2 = styled.h2`
  font-size: ${(props) => props.theme.headings.h2.fontSize};
  font-weight: ${(props) => props.theme.headings.h2.fontWeight};
`;

const Heading2 = ({ children }) => {
  return <StyledHeading2>{children}</StyledHeading2>;
};

export default Heading2;
