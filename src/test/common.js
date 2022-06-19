import './common.scss';

export const Arrow = ({ onClick, direction = 'arrow-up' }) => {
    return (
        <div className="arrow-conta" onClick={onClick}>
            <div className={`arrow ${direction}`} />
        </div>
    );
};

const BoxContainer = ({ children }) => {
    return (
        <div className="box-container">
            <div className="header">
                <Arrow onClick={() => window.scrollTo(0, 0)} />
            </div>
            <div>{children}</div>
        </div>
    );
};
export default BoxContainer;
