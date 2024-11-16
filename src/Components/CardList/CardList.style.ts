import styled from "styled-components";
import { spin } from "../../style/animations";

export const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap:wrap;
  
  h2 {
    color: white;
    z-index:10;
  }
`;

export const LoaderContainer = styled.div`
  display: flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  margin-top:100px;
  img {
    animation: ${spin} 5s linear infinite;
    z-index:10;
  }
`;
