import styled from "styled-components";
import { colors } from "../../style/colors";

export const ModalDiv = styled.div`
  position: fixed;
  z-index: 100 !important;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.54);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Close = styled.img`
  position: absolute;
  top: 15px;
  right: 35px;
  color: #f1f1f1;
  font-size: 40px;
  font-weight: bold;
  transition: 0.3s;
  cursor: pointer;
`;

export const ContentContainer = styled.div`
  width: 40vw;
  height: 85%;
  background-color: white;
  border-radius: 3%;
  @media (max-width: 1000px) {
    width: 80%;
    height: 75%;
    
  }
`;
export const CirclesContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: 10px;
`;
export const Circle = styled.div`
  width: 17px;
  aspect-ratio: 1;
  background-color: ${colors.primary};
  border-radius: 50%;
  margin: 5px;
  &:nth-child(2) {
    background-color: ${colors.background};
  }
  &:nth-child(3) {
    background-color: gray;
  }
`;

export const InfosContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${colors.background};
  p {
    margin: 5px;
  }
`;
export const Info = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: max-content;
  min-height: 30px;
  &:nth-child(even) {
    color: ${colors.background};
    background-color: ${colors.primary};
  }
`;

export const DetailsContainer = styled.div`
  margin-top: 35px;
  display: flex;
  justify-content: center;
  button {
    width: 7rem;
    height: 50px;
    border-radius: 5px;
    border: none;
    font-size: 15px;
    font-weight: 400;
    background: ${colors.background};
    color: #f5f5f5;
    cursor: pointer;
  }
`;
