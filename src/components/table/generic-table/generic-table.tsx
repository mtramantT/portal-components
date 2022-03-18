import React, { PropsWithChildren } from "react";

interface Props<T> {
    data: T[];
    headers: {
        key: keyof T;
        lable: string;
    }[];
    idKey: keyof T; //add union tyoe func for custom keys 
}

interface TableProps<T> extends PropsWithChildren<Props<T>> {
    //Empty wrapper interface
}

export const Table = <T, >(props: TableProps<T>) => {
    return (
        <table>
            
        </table>
    )
}