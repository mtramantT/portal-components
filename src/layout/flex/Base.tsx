import styled from "styled-components";
import media, { Breakpoint, DeviceSize, mediaStyleProps } from "./Media";

interface BaseProps {
    collapse?: DeviceSize;
    custom?: {
        breakpoint: Breakpoint;
        styles: string;
    };
}

const Base = styled.div<BaseProps>`
    ${(props) => props.collapse && media[props.collapse](mediaStyleProps.collapse())}
    ${(props) => props.custom && media["def"](props.custom.styles, props.custom.breakpoint)}
`;

export default Base;