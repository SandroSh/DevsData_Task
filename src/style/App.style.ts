import styled from "styled-components";

export const PaginationContainer = styled.div`
    display:flex;
    justify-content:center;

    img{
        margin:10px;
        cursor:pointer;
        &:hover{
            transition:0.2s;
            transform:scale(0.94);
        }
    }
`;