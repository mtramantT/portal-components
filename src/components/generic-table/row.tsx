import React, { PropsWithChildren } from "react";

interface Props<T> {
    data: T
}

export const Row = <T extends {id: number}, >(props: PropsWithChildren<Props<T>>) => {

}