export function objectValues<T extends {}>(obj: T) {
    return Object.keys(obj).map((objectKey) => obj[objectKey as keyof T])
}

export type PrimitiveType = string | Symbol | number | boolean;

export const isPrimitive = (value: any): value is PrimitiveType => {
    return (
        typeof value === 'string' ||
        typeof value === 'symbol' ||
        typeof value === 'boolean' ||
        typeof value === 'number'
    );
}