import * as React from 'react';
import styled from 'styled-components';
import { ColSpan, MediaDevices } from './types';

interface ColumnProps {
    device?: MediaDevices;
    colSpan?: ColSpan;
    children?: React.ReactNode | React.ReactNode[]
    style?: React.CSSProperties;
}

const ColumnWrapper = styled.div<ColumnProps>`
    float: left;
    padding: 15px;
    width: 100%; // Mobile first
`;

const XsmColumn = styled(ColumnWrapper).attrs({ className: 'col-xsm' })`
    @media only screen and (max-width: 600px) {
        width: ${(props) => `${getWidth(props.colSpan)}%`};
    }
`;
const SmColumn = styled(ColumnWrapper).attrs({ className: 'col-sm' })`
    @media only screen and (min-width: 768px) {
        width: ${(props) => `${getWidth(props.colSpan)}%`};
    }
`;
const MdColumn = styled(ColumnWrapper).attrs({ className: 'col-md' })`
    @media only screen and (min-width: 768px) {
        width: ${(props) => `${getWidth(props.colSpan)}%`};
    }
`;
const LgColumn = styled(ColumnWrapper).attrs({ className: 'col-lg' })`
    @media only screen and (min-width: 992px) {
        width: ${(props) => `${getWidth(props.colSpan)}%`};
    }
`;
const XlgColumn = styled(ColumnWrapper).attrs({ className: 'col-xlg' })`
    @media only screen and (min-width: 1200px) {
        width: ${(props) => `${getWidth(props.colSpan)}%`};
    }
`;

const getWidth = (colSpan?: ColSpan): number => {
    if (!colSpan || colSpan === 'auto' || colSpan < 1 || colSpan > 12) return 100 // auto = 100
    if (colSpan % 3 === 0) return (colSpan / 3) * 25; // Modulus 3 rounder
    return 8.333 * colSpan;
};

export const Column: React.FC<ColumnProps> = (props: ColumnProps) => {
    switch (props.device) {
        case 'xsm':
            return <XsmColumn colSpan={props.colSpan} {...props}>{props.children}</XsmColumn>;
        case 'sm':
            return <SmColumn colSpan={props.colSpan} {...props}>{props.children}</SmColumn>;
        case 'md':
            return <MdColumn colSpan={props.colSpan} {...props}>{props.children}</MdColumn>;
        case 'lg':
            return <LgColumn colSpan={props.colSpan} {...props}>{props.children}</LgColumn>;
        case 'xlg':
            return <XlgColumn colSpan={props.colSpan} {...props}>{props.children}</XlgColumn>;
        default:
            return <MdColumn colSpan={props.colSpan} {...props}>{props.children}</MdColumn>;
    }
};

export default Column;
