import React from 'react';

import useCookie from './hooks/useCookie-v2';

const App = () => {
    const [value, setValue] = useCookie('aaa', 'aaa', { expires: 365 });
    console.log(value);
    return <div onClick={() => setValue('bbb')}>111</div>;
};

export default App;
