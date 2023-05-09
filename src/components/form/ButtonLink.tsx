import React, { HtmlHTMLAttributes } from "react";
import styled from "styled-components";

const Button = styled.button`
    font-size: 16px;
    background: rgb(0,0,0,1);
    text-decoration: underline;
    &:hover {
        color: blue;
    }
    &:focus {

    }
`;

const ButtonLink = (props: HtmlHTMLAttributes<HTMLButtonElement>) => {
    return <Button {...props} /> 
}

export default ButtonLink;