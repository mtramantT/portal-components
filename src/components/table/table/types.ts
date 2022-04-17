import { PrimitiveType } from "../../../types";

export interface MinTableItem {id: PrimitiveType;}
export type TableHeaders<T extends MinTableItem> = Record<keyof T, string>;
export type CustomRenderers<T extends MinTableItem> = Partial<
Record<keyof T, (it: T) => React.ReactNode>
>;
