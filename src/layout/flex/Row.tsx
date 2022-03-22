import styled from 'styled-components';
import Base from './Base';
import media, { DeviceSize, mediaStyleProps } from './Media';

interface RowProps {
    stack?: DeviceSize;
}

export const Row = styled(Base)<RowProps>`
    display: flex;
    ${(props) => props.stack && media[props.stack](mediaStyleProps.stack())}
`;
