import styled from "styled-components";

export const Wrapper = styled.nav`
  &:hover {
    -webkit-box-shadow: 0px 1px 22px -12px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 1px 22px -12px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 1px 22px -12px rgba(0, 0, 0, 0.75);
    opacity: 1;
    background: white;
  }
  height: ${(props) => props.height};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  opacity: 0.3;
  transition: all 0.4s;
  z-index: 10000;
`;

export const LogoContainer = styled.div`
  width: 10rem;
`;

export const LinksContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  gap: 2rem;
  align-items: center;
`;

export const LinkStyled = styled.span`
  &:hover {
    color: ${(props) => props.theme.colors.primary};
  }
  color: ${(props) => props.theme.colors.grey};
  transition: all 0.4s;
  cursor: pointer;
  font-weight: ${(props) => props.theme.bold};
`;
