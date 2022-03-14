import styled from "styled-components";

interface HrProps {
    type: 'solid' | 'dashed';
    color?: string;
}

// Style Wrappers
const HrWrapper = styled.hr<HrProps>`
    border-top: ${({ type, color }) => `1px ${type} ${color || 'black'}`};
    width: 100%;
`;

// Defaults
const defaultProps: HrProps = {
    type: 'solid',
    color: 'black',
}


// Main Export
export const Hr = (props?: HrProps): JSX.Element => {
    props = props ? props : defaultProps
    return <HrWrapper {...props} />
}