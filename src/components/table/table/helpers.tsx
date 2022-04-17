import React from "react";
import { isPrimitive, PrimitiveType } from "../../../types";
import { Helpers } from "../../../utility";
import { TBody } from "../generic-table/styles";
import { CustomRenderers, MinTableItem, TableHeaders } from "./types";
import { TD, TH, THEAD, TR } from "./wrappers";

const {objectValues, objectKeys} = Helpers;

export const renderRow = <T extends { id: PrimitiveType},>(item: T, customRenders?: CustomRenderers<T>) => {
    return (
        <TR>
            {
                objectKeys(item).map((itemProp) => {
                    const customRenderer = customRenders?.[itemProp];
                    customRenderer
                        ? <TD>{customRenderer(item)}</TD>
                        : <TD>{isPrimitive(item[itemProp]) ? item[itemProp] : ""}</TD>
                })
            }
        </TR>
    );
}

export const renderHeader = <T extends MinTableItem, >(headers: TableHeaders<T>) => {
    return (
        <THEAD>
            {objectValues(headers).map((headerValue) => (
                <TH>{headerValue}</TH>
            ))}
        </THEAD>
    );
}

export const renderBody = <T extends MinTableItem, >(items: T[], customRenderers?: CustomRenderers<T>) => {
    return (
        <TBody>
            {items.map((item) => renderRow<T>(item, customRenderers))}
        </TBody>
    )
}