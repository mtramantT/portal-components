import styled from "styled-components";

interface HorizontalLineProps {
    type: 'solid' | 'dashed';
    color?: string;
}
const HrWrapper = styled.hr<HorizontalLineProps>`
    border-top: ${({ type, color }) => `1px ${type} ${color || 'black'}`};
`;
const defaultProps: HorizontalLineProps = {
    type: 'solid',
    color: 'black',
}

export const Hr = (props?: HorizontalLineProps) => {
    props = props ? props : defaultProps
    return <HrWrapper {...props} />
}