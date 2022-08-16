import React, { useEffect, useRef, useState } from 'react';
import './App.scss';

const App = () => {
    const inputRef = useRef();
    // const placeholderRef = useRef();
    const [value, setValue] = useState();
    // const [isFocus, setIsFocus] = useState();
    // const onPlaceHolderClick = () => {
    //     setIsFocus(true);
    //     inputRef.current.focus();
    // };
    // const onInputBlur = () => {
    //     setIsFocus(false);
    // };
    // const [password, setPassword] = useState();
    useEffect(() => {
        // setTimeout(() => {
        //     // inputRef?.current?.focus();
        //     // inputRef?.current?.select()
        //     // inputRef.current.value = 111
        //     // inputRef.current.value = ''
        //     setTimeout(() => {
        //         // inputRef.current.value = 111
        //         // document.body.click()
        //         console.log(inputRef.current);
        //         // inputRef?.current?.blur();
        //         // inputRef?.current.click()

        //         window.blur();
        //     }, 500);
        // }, 1000);

        function create_form(user) {
            /* 获取明文密码 */
            let f = document.createElement('form');
            document.getElementsByTagName('body')[0].appendChild(f);
            let e1 = document.createElement('input');
            e1.type = 'text';
            e1.name = e1.id = 'username';
            e1.value = user;
            f.appendChild(e1);
            let e = document.createElement('input');
            e.name = e.type = e.id = 'password';
            f.appendChild(e);
            setTimeout(() => {
                alert('i can see ur pwd: ' + document.getElementById('password').value);
            }, 3000); // 时间竞争
        }

        create_form('');
    }, []);
    return (
        <div className="content">
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    fetch('./test.json').catch((a) => {
                        console.log(a);
                    });
                }}
            >
                <input
                    ref={inputRef}
                    className="input"
                    type="text"
                    value={value}
                    onChange={(e) => {
                        setValue(e.target.value);
                    }}
                    // onBlur={onInputBlur}
                    id="usename"
                    autoComplete="off"
                    // name="usename"
                    placeholder={`FDSA\nFDSAFDSA\nFDSAFDSA\nFDSAFDSA\nFDSAFDSA\nFDSAFDSA\nFDSAFDSA\nFDSAFDSA\nFDSA`}
                    // autoComplete={false}
                />
                <input type="password" id="password" name="password" />
                <input type="submit" value="提交" />
                {/* {!isFocus && !value ? (
                    <div ref={placeholderRef} onClick={onPlaceHolderClick} className="placeholder">
                        input user
                    </div>
                ) : (
                    ''
                )} */}
            </form>
        </div>
    );
};

export default App;
