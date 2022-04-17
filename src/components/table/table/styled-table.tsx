import React from "react";
import { PrimitiveType } from "../../../types";
import { CustomRenderers, TableHeaders } from "./types";

interface MinTableItem {
    id: PrimitiveType;
}

interface TableProps<T extends MinTableItem> {
    items: T[];
    headers: TableHeaders<T>;
    customRenderers?: CustomRenderers<T>;
}

const Table = <T extends MinTableItem, >(props: TableProps<T>) => {
    
}