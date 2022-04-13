import { useCallback, useState } from "react";

export function useBooleanState(initialValue: boolean) {
    const [value, setValue] = useState(initialValue);
    
    const setFalse = useCallback(() => setValue(false), []);
    const setTrue = useCallback(() => setValue(true), []);

    return [value, setFalse, setTrue];
}