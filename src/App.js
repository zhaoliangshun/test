import React from 'react';

import { useCookie } from './hooks';
import isPlainObject from 'lodash/isPlainObject';

const aa = {
    a: 1,
    b: 2,
    c: {
        d: 3,
    },
    e: [4],
};

console.log(isPlainObject(aa));
// '{"a":1,"b":2,"c":{"d":3},"e":[4]}'.replaceAll('"', '')
// '{AAA:1,b:2,c:{d:3},e:[4]}'.replace(/([a-z]+):/gi,'"$1":')
const App = () => {
    const [value, setValue] = useCookie('aaa', '*$#|');
    console.log(value);
    return <div onClick={() => setValue('*$#|[]', { expires: 365 })}>111</div>;
};

export default App;
