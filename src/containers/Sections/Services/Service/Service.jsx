import React from "react";
import { Wrapper, IconContainer, Description } from "./Service.style";

import { Heading4 } from "../../../../components/ThemeComponents/Headings";

import Button from "../../../../components/UI/Button/Button";

const Service = ({ label, desc, icon, link }) => {
  return (
    <Wrapper>
      <IconContainer>{icon}</IconContainer>
      <Heading4>{label}</Heading4>
      <Description>{desc}</Description>
      <Button variant="outlined">See more</Button>
    </Wrapper>
  );
};

export default Service;
