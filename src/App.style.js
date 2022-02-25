import styled from "styled-components";

export const AppStyled = styled.main`
  color: ${(props) => props.theme.colors.grey};
  font-size: ${(props) => props.theme.fontNormal.normal};
  font-weight: ${(props) => props.theme.fontNormal.weight};
`;
