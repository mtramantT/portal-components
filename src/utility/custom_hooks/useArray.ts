import { useState } from "react";

export function useArray<T = {}>(initialArray: T[] = []) {
    const [array, setArray] = useState(initialArray)

    const add = (val: T) => setArray((oldValue) => [...oldValue, val]);
    const remove = (index: number) => setArray((oldValue) => oldValue.filter((_, i) => i !== index))

    return { array, setArray, add, remove }
}