import styled from "styled-components";
import media, { applyMediaQueryStyle, flattenProps, mediaStyleProps } from "./Media";
import { CustomMediaQuery, DeviceSize, isCustomMedia, isMediaQuery, MediaQuery } from "./types";

interface BaseProps {
    collapse?: DeviceSize | MediaQuery;
    custom?: CustomMediaQuery | string;
}

const Base = styled.div<BaseProps>`
    ${(props) => props.collapse && 
        (isMediaQuery(props.collapse)
            ? media[props.collapse.deviceSize](mediaStyleProps.collapse(props.collapse.styles))
            : media[props.collapse](mediaStyleProps.collapse())
        )}
    ${(props) => props.custom && 
        (isCustomMedia(props.custom)
            ? applyMediaQueryStyle(props.custom.mediaQuery, Array.isArray(props.custom.styles) ? flattenProps(props.custom.styles) : props.custom.styles)
            : props.custom
        )}
`;

export default Base;
