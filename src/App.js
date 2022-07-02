import React from 'react';

import { useIDBKeyval } from './hooks';

const App = () => {
    const [value, setValue] = useIDBKeyval('aaa');
    console.log(value);
    return <div onClick={() => setValue('bbb', { expires: 365 })}>111</div>;
};

export default App;
