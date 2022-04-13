import React, { PropsWithChildren } from "react";
import styled from "styled-components";

interface Props<T> {
    data: T[];
    headers: {
        key: keyof T;
        lable: string;
    }[];
}

interface TableProps<T> extends PropsWithChildren<Props<T>> {
    //Empty wrapper interface
}

const TableWrapper = styled.table``;

export const Table = <T, >(props: TableProps<T>) => {
    return (
        <table>
            
        </table>
    )
}