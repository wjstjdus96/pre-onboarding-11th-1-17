import { styled } from "styled-components";

export const Wrapper = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;

    li { 
        margin-bottom: 20px;
    }

    li:last-child  {
        margin-bottom: 0;
    }
`