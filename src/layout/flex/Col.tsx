import React from "react";
import styled from "styled-components";
import media, { collapseMediaStyle, stackMediaStyle, DeviceSize } from "./Media";

interface ColProps {
    size?: number;
    collapse?: DeviceSize;
    stack?: DeviceSize;
}

export const Col = styled.div<ColProps & React.HTMLProps<HTMLDivElement>>`
    flex: ${(props) => props.size || 1};
    ${(props) => props.collapse && media[props.collapse](collapseMediaStyle)}
    ${(props) => props.stack && media[props.stack](stackMediaStyle)}
`
