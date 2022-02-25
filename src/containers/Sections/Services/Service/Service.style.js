import styled from "styled-components";

export const Wrapper = styled.div`
  &:hover {
    transform: scale(1.1);
    box-shadow: 0px 4px 7px -5px rgb(0 0 0 / 75%);
  }
  transition: all 0.2s;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 30rem;
  justify-content: space-evenly;
  text-align: center;
  width: 20rem;
`;

export const IconContainer = styled.div`
  font-size: 2rem;
  border: 1.7px solid ${(props) => props.theme.colors.grey};
  color: ${(props) => props.theme.colors.primaryDark};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3rem;
  height: 3rem;
  border-radius: 5px;
`;

export const Description = styled.p``;
