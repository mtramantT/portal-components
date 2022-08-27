export type PrimitiveType = string | Symbol | number | boolean;

export function isPrimitive(value: any): value is PrimitiveType {
    return (
      typeof value === "string" ||
      typeof value === "number" ||
      typeof value === "boolean" ||
      typeof value === "symbol"
    );
}

export type JSONValue =
    | string
    | number
    | boolean
    | { [x: string]: JSONValue }
    | Array<JSONValue>;

export type JSONObject = {[x: string]: JSONValue}
