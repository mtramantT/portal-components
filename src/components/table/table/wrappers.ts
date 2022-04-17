import styled from "styled-components";

export const ContainerWrapper = styled.div<{p: {}}>`
    ${({ p }) => p ? {...p} : '' }
`;
export const TableWrapper = styled.table``;
export const TD = styled.td``;
export const TH = styled.th``;
export const TR = styled.tr``;
export const THEAD = styled.thead``;
export const TBODY = styled.tbody``;
