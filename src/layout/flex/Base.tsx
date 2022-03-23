import styled from "styled-components";
import media, { applyMediaQueryStyle, CustomMediaQuery, DeviceSize, flattenProps, isCustomMedia, isMediaQuery, MediaQuery, mediaStyleProps } from "./Media";

// Consider adding all the media stuff here to reduce imorts accross the board

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
