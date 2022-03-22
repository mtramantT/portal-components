import styled from "styled-components";
import media, { applyMediaQueryStyle, DeviceSize, mediaStyleProps } from "./Media";

interface BaseProps {
    collapse?: DeviceSize;
    custom?: {styles: string; mediaQuery: string;} | string;
}

const Base = styled.div<BaseProps>`
    ${(props) => props.collapse && media[props.collapse](mediaStyleProps.collapse())}
    ${(props) => props.custom && (typeof props.custom === 'string' ? props.custom : applyMediaQueryStyle(props.custom.mediaQuery, props.custom.styles))}
`;

export default Base;