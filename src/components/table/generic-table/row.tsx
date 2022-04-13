import React, { PropsWithChildren } from "react";

interface Props<T> {
    data: T;
    headers: {
        key: keyof T;
        lable: string;
    };
}

export const Row = <T extends {id: number}, >(props: PropsWithChildren<Props<T>>) => {

}