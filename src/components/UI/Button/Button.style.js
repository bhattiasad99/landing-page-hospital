import styled, { keyframes } from "styled-components";
const appear = keyframes`
    from {
        transform: scale(0)
    } to {
        transform: scale(1)
    }
`;
export const Default = styled.button`
  border: none;
  outline: none;
  padding: 0.6rem 2rem;
  border-radius: 10px;
  animation: ${appear} 0.2s linear;
`;

export const Outlined = styled(Default)`
  &:hover {
    background: white;
    letter-spacing: 1px;
    box-shadow: 0px 4px 7px -5px rgb(0 0 0 / 75%);
  }

  background: white;
  color: ${(props) => props.theme.colors.primaryDark};
  border: 1px solid ${(props) => props.theme.colors.primaryDark};
  transition: all 0.3s;
  font-weight: 600;
  cursor: pointer;
`;

export const Contained = styled(Default)`
  &:hover {
    background: ${(props) => props.theme.colors.primary};
    letter-spacing: 1px;
    box-shadow: 0px 8px 7px -5px rgb(0 0 0 / 75%);
  }

  background: ${(props) => props.theme.colors.primaryDark};
  color: white;
  transition: all 0.3s;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0px 5px 7px -5px rgb(0 0 0 / 75%);
`;
