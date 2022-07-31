import React, { useRef, useState } from 'react';
import './App.scss';

const App = () => {
    const inputRef = useRef();
    const placeholderRef = useRef();
    const [value, setValue] = useState();
    const [isFocus, setIsFocus] = useState();
    const onPlaceHolderClick = () => {
        setIsFocus(true);
        inputRef.current.focus();
    };
    const onInputBlur = () => {
        setIsFocus(false);
    };
    return (
        <div className="content">
            <input
                ref={inputRef}
                className="input"
                type="text"
                value={value}
                onChange={(e) => {
                    setValue(e.target.value);
                }}
                onBlur={onInputBlur}
            />
            {!isFocus && !value ? (
                <div ref={placeholderRef} onClick={onPlaceHolderClick} className="placeholder">
                    aaa aaa aaa aaaaaa aaaaaa aaaaaa aaaaaa aaa
                </div>
            ) : (
                ''
            )}
        </div>
    );
};

export default App;
