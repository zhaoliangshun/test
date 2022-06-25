import { useCallback, useState, useRef, useLayoutEffect } from 'react';
import { isBrowser, noop } from './misc/util';

const useLocalStorage = (key, initialValue, options) => {
    if (!isBrowser) {
        return [initialValue, noop, noop];
    }
    if (!key) {
        throw new Error('useLocalStorage key may not be falsy');
    }

    const deserializer = options ? (options.raw ? (value) => value : options.deserializer) : JSON.parse;

    const initializer = useRef((key) => {
        try {
            const serializer = options ? (options.raw ? String : options.serializer) : JSON.stringify;

            const localStorageValue = localStorage.getItem(key);
            if (localStorageValue !== null) {
                return deserializer(localStorageValue);
            } else {
                initialValue && localStorage.setItem(key, serializer(initialValue));
                return initialValue;
            }
        } catch {
            return initialValue;
        }
    });

    const [state, setState] = useState(() => initializer.current(key));

    useLayoutEffect(() => setState(initializer.current(key)), [key]);

    const set = useCallback(
        (valOrFunc) => {
            try {
                const newState = typeof valOrFunc === 'function' ? valOrFunc(state) : valOrFunc;
                if (typeof newState === 'undefined') return;
                let value;

                if (options)
                    if (options.raw)
                        if (typeof newState === 'string') value = newState;
                        else value = JSON.stringify(newState);
                    else if (options.serializer) value = options.serializer(newState);
                    else value = JSON.stringify(newState);
                else value = JSON.stringify(newState);

                localStorage.setItem(key, value);
                setState(deserializer(value));
            } catch {}
        },
        [key, setState],
    );

    const remove = useCallback(() => {
        try {
            localStorage.removeItem(key);
            setState(undefined);
        } catch {}
    }, [key, setState]);

    return [state, set, remove];
};

export default useLocalStorage;
