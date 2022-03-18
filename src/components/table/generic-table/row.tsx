import React, { PropsWithChildren } from "react";

interface Props<T> {
    data: T;
    headers: {
        key: keyof T;
        lable: string;
    };
    idKey: keyof T;
}

export const Row = <T extends {id: number}, >(props: PropsWithChildren<Props<T>>) => {

}