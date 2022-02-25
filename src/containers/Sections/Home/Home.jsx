import React from "react";
import { Heading1 } from "../../../components/ThemeComponents/Headings";
import {
  HeroContainer,
  Wrapper,
  Content,
  Description,
  Circle,
} from "./Home.style";
import Button from "../../../components/UI/Button/Button";
const Home = ({ bookAppointment }) => {
  const callToActionHandler = (e) => {
    e.preventDefault();
    bookAppointment();
  };
  return (
    <Wrapper style={{ minHeight: "100vh" }}>
      <Circle>&nbsp;</Circle>
      <Content>
        <Heading1>Dedicated to serve!</Heading1>
        <Description>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi,
          pariatur sint? Repellendus provident, eos sed eius rerum odio id
          eligendi?
        </Description>
        <Button onClick={callToActionHandler} variant="contained">
          Book an Appointment!
        </Button>
      </Content>
      <HeroContainer>
        <img
          style={{ width: "100%", height: "100%" }}
          src="./img/hero-removebg-preview.png"
          alt="hero"
        />
      </HeroContainer>
    </Wrapper>
  );
};

export default Home;
