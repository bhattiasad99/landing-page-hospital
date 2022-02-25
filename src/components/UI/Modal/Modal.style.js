import styled, { keyframes } from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  background-color: rgba(107, 107, 107, 0.6);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;
export const Box = styled.div`
  background: white;
  position: fixed;
  top: 50%;
  min-width: 60%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  padding: 2.4rem;
  border-radius: 10px;
  min-height: 10rem;
  opacity: ${(props) => props.opacity};
  transition: all 0.4s;
`;

export const BoxHeading = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

export const IconButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  border: none;
  outline: none;
  cursor: pointer;
`;
