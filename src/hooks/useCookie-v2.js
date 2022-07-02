import { useCallback, useState } from 'react';
import Cookies from 'js-cookie';

const useCookie = (cookieName, initialValue, options, raw = true) => {
    const [value, setValue] = useState(() => {
        try {
            const v = Cookies.get(cookieName);
            if (typeof v !== 'string') {
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
            Cookies.set(cookieName, v, { ...options, ...newOptions });
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


// import React from 'react';

// import useCookie from './hooks/useCookie-v2';

// const App = () => {
//     const [value, setValue] = useCookie('aaa', 'aaa');
//     console.log(value);
//     return <div onClick={() => setValue('bbb', { expires: 365 })}>111</div>;
// };

// export default App;