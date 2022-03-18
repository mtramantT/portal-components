import React, { PropsWithChildren } from "react";

interface Props<T> {
    objects: T[];
    headers: {
        key: keyof T;
        lable: string;
    }[];
}

export const Table = <T extends { id: number }, >(
    props: PropsWithChildren<Props<T>>
  ) => {
  }