import { useState } from 'react';
import './index.scss';

export default () => {
    const [spread, setSpread] = useState(false);
    return (
        <div className="test">
            <span>标题文本</span>
            <div className={`arrow ${spread ? 'arrow-down' : 'arrow-up'}`} onClick={() => setSpread(!spread)} />
            <div className={`dropdown-container ${spread ? '' : 'hide'}`}> aaa </div>
        </div>
    );
};
