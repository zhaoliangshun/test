import { useEffect, useState } from 'react';
import { isBrowser } from './misc/util';

const useSessionStorage = (key, initialValue, raw) => {
    if (!isBrowser) {
        return [initialValue, () => {}];
    }

    const [state, setState] = useState(() => {
        try {
            const sessionStorageValue = sessionStorage.getItem(key);
            if (typeof sessionStorageValue !== 'string') {
                sessionStorage.setItem(key, raw ? String(initialValue) : JSON.stringify(initialValue));
                return initialValue;
            } else {
                return raw ? sessionStorageValue : JSON.parse(sessionStorageValue || 'null');
            }
        } catch {
            return initialValue;
        }
    });

    useEffect(() => {
        try {
            const serializedState = raw ? String(state) : JSON.stringify(state);
            sessionStorage.setItem(key, serializedState);
        } catch {}
    });

    return [state, setState];
};

export default useSessionStorage;
