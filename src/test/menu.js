import { useState } from 'react';
import './menu.scss';
const menu = [
    {
        pg: 'aaa'
    },
    {
        pg: 'bbb'
    },
    {
        pg: 'ccc'
    },
    {
        pg: 'ddd'
    },
    {
        pg: 'eee'
    },
    {
        pg: 'aaa'
    },
    {
        pg: 'bbb'
    },
    {
        pg: 'ccc'
    },
    {
        pg: 'ddd'
    },
    {
        pg: 'eee'
    },
    {
        pg: 'aaa'
    },
    {
        pg: 'bbb'
    },
    {
        pg: 'ccc'
    },
    {
        pg: 'ddd'
    },
    {
        pg: 'eee'
    },
    {
        pg: 'aaa'
    },
    {
        pg: 'bbb'
    },
    {
        pg: 'ccc'
    },
    {
        pg: 'ddd'
    },
    {
        pg: 'eee'
    },
    {
        pg: 'aaa'
    },
    {
        pg: 'bbb'
    },
    {
        pg: 'ccc'
    },
    {
        pg: 'ddd'
    },
    {
        pg: 'eee'
    },
    {
        pg: 'aaa'
    },
    {
        pg: 'bbb'
    },
    {
        pg: 'ccc'
    },
    {
        pg: 'ddd'
    },
    {
        pg: 'eee'
    },
    {
        pg: 'aaa'
    },
    {
        pg: 'bbb'
    },
    {
        pg: 'ccc'
    },
    {
        pg: 'ddd'
    },
    {
        pg: 'eee'
    },
    {
        pg: 'aaa'
    },
    {
        pg: 'bbb'
    },
    {
        pg: 'ccc'
    },
    {
        pg: 'ddd'
    },
    {
        pg: 'eee'
    },
    {
        pg: 'aaa'
    },
    {
        pg: 'bbb'
    },
    {
        pg: 'ccc'
    },
    {
        pg: 'ddd'
    },
    {
        pg: 'eee'
    },
    {
        pg: 'aaa'
    },
    {
        pg: 'bbb'
    },
    {
        pg: 'ccc'
    },
    {
        pg: 'ddd'
    },
    {
        pg: 'eee'
    },
    {
        pg: 'aaa'
    },
    {
        pg: 'bbb'
    },
    {
        pg: 'ccc'
    },
    {
        pg: 'ddd'
    },
    {
        pg: 'eee'
    },
    {
        pg: 'aaa'
    },
    {
        pg: 'bbb'
    },
    {
        pg: 'ccc'
    },
    {
        pg: 'ddd'
    },
    {
        pg: 'eee'
    },
    {
        pg: 'aaa'
    },
    {
        pg: 'bbb'
    },
    {
        pg: 'ccc'
    },
    {
        pg: 'ddd'
    },
    {
        pg: 'eee'
    },
    {
        pg: 'aaa'
    },
    {
        pg: 'bbb'
    },
    {
        pg: 'ccc'
    },
    {
        pg: 'ddd'
    },
    {
        pg: 'eee'
    },
    {
        pg: 'aaa'
    },
    {
        pg: 'bbb'
    },
    {
        pg: 'ccc'
    },
    {
        pg: 'ddd'
    },
    {
        pg: 'eee'
    },
    {
        pg: 'aaa'
    },
    {
        pg: 'bbb'
    },
    {
        pg: 'ccc'
    },
    {
        pg: 'ddd'
    },
    {
        pg: 'eee'
    },
    {
        pg: 'aaa'
    },
    {
        pg: 'bbb'
    },
    {
        pg: 'ccc'
    },
    {
        pg: 'ddd'
    },
    {
        pg: 'eee'
    },
    {
        pg: 'aaa'
    },
    {
        pg: 'bbb'
    },
    {
        pg: 'ccc'
    },
    {
        pg: 'ddd'
    },
    {
        pg: 'eee'
    }
];

export default () => {
    const [spread, setSpread] = useState(false);
    return (
        <>
            <div className={spread ? 'mask' : ''} onClick={() => setSpread(!spread)} />
            <div className="test">
                <span>标题文本</span>
                <div className="arrow-conta" onClick={() => setSpread(!spread)}>
                    <div className={`arrow ${spread ? 'arrow-down' : 'arrow-up'}`} />
                </div>
                <div className={`dropdown-container ${spread ? '' : 'hide'}`}>
                    {menu.map((item, index) => {
                        return (
                            <div className="item" key={index} onClick={() => setSpread(!spread)}>
                                {item.pg}
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
};
