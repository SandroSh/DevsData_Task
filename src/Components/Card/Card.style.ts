import styled from "styled-components";
import { colors } from "../../style/colors";


export const IdSpan = styled.span`
  color: ${colors.primary};
`;
export const CardContainer = styled.div`
  width: 220px;
  height: 135px;
  position: relative;
  padding: 25px;
  margin: 15px;
  background-color: white;
  box-shadow: 0px 155px 62px rgba(0, 0, 0, 0.01),
    0px 87px 52px rgba(0, 0, 0, 0.05), 0px 39px 39px rgba(0, 0, 0, 0.09),
    0px 10px 21px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1);
  border-radius: 23px;
  transition: all 0.8s cubic-bezier(0.15, 0.83, 0.66, 1);
  cursor: pointer;
  &:hover {
    transform: scale(0.98);
    background: radial-gradient(
        178.94% 106.41% at 26.42% 106.41%,
        ${colors.secondary} 0%,
        rgba(255, 255, 255, 0) 71.88%
      )
      #ffffff;
  }
  &:hover ${IdSpan}{
    transform:scale(1.04) !important;
    transition:1s;
  }
`;

export const CardHeader = styled.div`
  text-align: center;
  margin-top:10px;
  span{
    font-size:22px;
    color:${colors.background} !important;
  }
`;

export const ButtonContainer = styled.div`
  position: absolute;
  bottom: 25px;
  left: 50%;
  transform: translateX(-50%);
`;

export const ButtonText = styled.span`
  transform: translateX(35px);
`;

export const IconContainer = styled.span`
  position: absolute;
  height: 10px;
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s;
  img {
    width: 45px;
  }
`;

export const Button = styled.button`
  width: 150px;
  height: 50px;
  border-radius: 5px;
  border: none;
  transition: all 0.5s ease-in-out;
  font-size: 15px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-weight: 400;
  display: flex;
  align-items: center;
  background: ${colors.background};
  color: #f5f5f5;
  &:hover ${IconContainer} {
    width: 145px;
  }
  &:hover ${ButtonText} {
    transition: all 0.1s;
    opacity: 0;
  }
  &:focus {
    outline: none;
  }
  &:active {
    transform: scale(1.05);
  }
  &:active ${IconContainer} {
    transform: scale(1.85);
  }
`;
