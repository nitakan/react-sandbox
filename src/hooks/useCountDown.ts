import { SyntheticEvent, useCallback, useEffect, useRef, useState } from "react";

const useCountDown = (
    initialValue: number,
    tickIntervalMillis: number = 1000,
    onReset: () => void = () => { },
    onCountDownEnd: () => void = () => { },
    onCountDownChanged: (value: number) => void = () => { },
    repeat: boolean = false,
): [value: number, reset: () => void] => {
    const intervalId = useRef<ReturnType<typeof setInterval>>();

    const [value, setValue] = useState(initialValue);

    const tick = useCallback((event?: SyntheticEvent) => {
        return setValue((t) => {
            const next = t - 1;
            onCountDownChanged(next);
            return next;
        });
    }, [onCountDownChanged]);

    const reset = useCallback((event?: SyntheticEvent) => {
        event?.preventDefault();
        onReset();
        if (intervalId.current) {
            clearInterval(intervalId.current);
        }
        setValue(initialValue);
        intervalId.current = setInterval(tick, tickIntervalMillis);

    }, [initialValue, tick, tickIntervalMillis, onReset]);

    useEffect(() => {
        reset();
        return () => clearInterval(intervalId.current);
    }, [reset]);

    useEffect(() => {
        if (value <= 0) {
            if (repeat) {
                reset();
            } else {
                clearInterval(intervalId.current);
                onCountDownEnd();
            }
        }
    }, [reset, value, onCountDownEnd, repeat]);


    return [value, reset];
};

export default useCountDown;