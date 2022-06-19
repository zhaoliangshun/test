import { useState } from 'react';
import './common.scss';

export const Arrow = ({ onClick, spread }) => {
    return (
        <div className="arrow-conta" onClick={onClick}>
            <div className={`arrow ${spread ? 'arrow-down' : 'arrow-up'}`} />
        </div>
    );
};

const BoxContainer = ({ children }) => {
    const [spread, setSpread] = useState(true);
    return (
        <div className="box-container">
            <div className="header">
                <Arrow spread={spread} onClick={() => setSpread(!spread)} />
            </div>
            <div className={`children-container ${spread ? '' : 'hide'}`}>{children}</div>
        </div>
    );
};
export default BoxContainer;
