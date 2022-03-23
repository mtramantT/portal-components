import styled from "styled-components";
import media, { applyMediaQueryStyle, DeviceSize, isMediaQuery, MediaQuery, mediaStyleProps } from "./Media";

interface BaseProps {
    collapse?: DeviceSize | MediaQuery;
    custom?: {styles: string; mediaQuery: string;} | string;
}

const Base = styled.div<BaseProps>`
    ${(props) => props.collapse && 
        (isMediaQuery(props.collapse)
            ? media[props.collapse.deviceSize](mediaStyleProps.collapse(props.collapse.styles))
            : media[props.collapse](mediaStyleProps.collapse())
        )}
    ${(props) => props.custom && (typeof props.custom === 'string' ? props.custom : applyMediaQueryStyle(props.custom.mediaQuery, props.custom.styles))}
`;

export default Base;
