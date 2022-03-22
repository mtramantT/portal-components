import styled from "styled-components";
import media, { DeviceSize, mediaStyleProps } from "./Media";

interface BaseProps {
    collapse?: DeviceSize;
}

const Base = styled.div<BaseProps>`
    ${(props) => props.collapse && media[props.collapse](mediaStyleProps.collapse())}
`;

export default Base;