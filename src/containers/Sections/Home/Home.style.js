import styled, { keyframes } from "styled-components";
import { device } from "../../../helpers/config";

export const Wrapper = styled.section`
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 0.4s;
  @media ${device.tablet} {
    flex-direction: column;
  } ;
`;

export const HeroContainer = styled.div`
  &:hover {
    opacity: 1;
  }
  width: 60%;
  opacity: 0.8;
  transition: all 0.3s;
`;

export const Content = styled.div`
  width: 50%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4rem;
  padding: 4rem;
`;

export const Description = styled.p``;

export const Circle = styled.div`
  position: absolute;
  top: -20%;
  left: -10%;
  background: radial-gradient(
    circle,
    ${(props) => props.theme.colors.primary} 10%,
    ${(props) => props.theme.colors.primaryDark} 50%
  );
  opacity: 0.3;
  width: 50rem;
  height: 50rem;
  z-index: -11;
  border-radius: 50%;
`;
