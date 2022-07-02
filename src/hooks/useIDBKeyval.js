import { useCallback, useEffect, useState } from 'react';
import { set, get } from 'idb-keyval';

const useIDBKeyval = (key, initialValue) => {
    const [state, setState] = useState();

    useEffect(() => {
        try {
            get(key)
                .then((v) => {
                    console.log(v);
                    if (v === undefined) {
                        set(key, initialValue);
                        setState(initialValue);
                    } else {
                        setState(v);
                    }
                })
                .catch((err) => console.log('It failed!', err));
        } catch {}
        return () => {};
    }, []);

    const reset = useCallback(
        (newValue) => {
            set(key, newValue);
            setState(newValue);
        },
        [key],
    );

    return [state, reset];
};

export default useIDBKeyval;

// import React from 'react';

// import { useIDBKeyval } from './hooks';

// const App = () => {
//     const [value, setValue] = useIDBKeyval('aaa');
//     console.log(value);
//     return <div onClick={() => setValue('bbb', { expires: 365 })}>111</div>;
// };

// export default App;
