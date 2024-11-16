import styled, { keyframes } from "styled-components";
import { spin } from "../../style/animations";


export const MainContainer = styled.div`
  width: 100%;
  max-width: 1500px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  a,
  img {
    cursor: pointer;
    z-index: 10;
  }
  a {
    img {
      width: 55px;
    }
  }
`;
export const MainIcon = styled.img`
  animation: ${spin} 5s linear infinite;
`;
