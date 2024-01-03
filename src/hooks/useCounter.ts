import { useState } from "react";

const useCounter = (): {
    state: number,
    reset: () => void,
    increment: () => void,
    setValue: (value: number) => void,
} => {
    const [value, setValue] = useState(0);
    const increment = () => {
        setValue((prev) => prev + 1);
    };
    const reset = () => {
        setValue(0);
    }

    return {
        state: value,
        reset: reset,
        increment: increment,
        setValue: setValue,
    };
};

export default useCounter;