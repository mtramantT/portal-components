import React from "react";
import styled from "styled-components";

export const Row = styled.div.attrs((props) => ({
    className: props.className || 'row'
}))`
    ::after {
        content: "";
        clear: both;
        display: table;
    }
`;
