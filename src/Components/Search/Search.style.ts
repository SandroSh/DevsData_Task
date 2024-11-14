import styled from "styled-components";
import { colors } from "../../style/colors";
export const SearchContainer = styled.div`
  width: 100%;
  max-width: 1500px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;

  input {
    max-width: 290px;
    width:100%;
    padding: 0.875rem;
    font-size: 1rem;
    border: 1.5px solid #000;
    border-radius: 0.5rem;
    box-shadow: 2.5px 3px 0 #000;
    outline: none;
    transition: ease 0.25s;
    color: ${colors.background}; 
    &:focus{
        box-shadow: 5.5px 7px 0 ${colors.primary};
    }
    &::placeholder{
        color:${colors.background};
    }
  }
`;
