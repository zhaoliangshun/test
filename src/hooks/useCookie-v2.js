import { useCallback, useState } from 'react';
import Cookies from 'js-cookie';

const useCookie = (cookieName, initialValue, options, raw = true) => {
    const [value, setValue] = useState(() => {
        try {
            const v = Cookies.get(cookieName);
            if (v === undefined) {
                Cookies.set(cookieName, raw ? String(initialValue) : JSON.stringify(initialValue), options);
                return initialValue;
            } else {
                return raw ? v : JSON.parse(v || 'null');
            }
        } catch {
            return initialValue;
        }
    });

    const updateCookie = useCallback(
        (newValue, newOptions) => {
            let v = raw ? String(newValue) : JSON.stringify(newValue);
            Cookies.set(cookieName, v, newOptions || options);
            setValue(newValue);
        },
        [cookieName],
    );

    const deleteCookie = useCallback(() => {
        Cookies.remove(cookieName);
        setValue(null);
    }, [cookieName]);

    return [value, updateCookie, deleteCookie];
};

export default useCookie;
