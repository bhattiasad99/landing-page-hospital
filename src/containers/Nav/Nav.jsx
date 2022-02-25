import React from "react";
import {
  Wrapper,
  LogoContainer,
  LinksContainer,
  LinkStyled,
} from "./Nav.style";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import ButtonStyled from "../../components/UI/Button/Button";
const Nav = ({ height }) => {
  return (
    <React.Fragment>
      <Wrapper height={height}>
        <LogoContainer>
          <img
            style={{ width: "100%", height: "100%" }}
            src="./img/logo-removebg-preview.png"
            alt="logo"
          />
        </LogoContainer>
        <LinksContainer>
          <Link spy={true} to="home" smooth={true}>
            <LinkStyled>Home</LinkStyled>
          </Link>
          <Link spy={true} to="services" smooth={true}>
            <LinkStyled>Services</LinkStyled>
          </Link>
          <Link spy={true} to="reviews" smooth={true}>
            <LinkStyled>Reviews</LinkStyled>
          </Link>
          <Link spy={true} to="contact" smooth={true}>
            <ButtonStyled variant="contained">Contact</ButtonStyled>
          </Link>
        </LinksContainer>
      </Wrapper>
      <div id="home" style={{ height: height }}>
        &nbsp;
      </div>
    </React.Fragment>
  );
};

export default Nav;

Nav.defaultProps = {
  height: "4rem",
};
