import styled from 'styled-components';
import Base from './Base';
import media, { mediaStyleProps } from './Media';
import { DeviceSize, isMediaQuery, MediaQuery } from './types';

interface RowProps {
    stack?: DeviceSize | MediaQuery;
}

export const Row = styled(Base)<RowProps>`
    display: flex;
    ${(props) => props.stack && 
        (isMediaQuery(props.stack)
            ? media[props.stack.deviceSize](mediaStyleProps.stack(props.stack.styles))
            : media[props.stack](mediaStyleProps.stack())
        )}
`;
