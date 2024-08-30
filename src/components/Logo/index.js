import './index.css';

const Logo = () => {
    return (
        <div className='bg-container'>
            <div className="logo-container">
                <div className="diamond diamond-1"></div>
                <div className="diamond diamond-2"></div>
                <div className="diamond diamond-3"></div>
                <div className="diamond diamond-4"></div>
                <div className="text-content">
                    <h1 className='heading'>HTML<span>&</span>CSS</h1>
                    <p className='para'>design and build websites</p>
                </div>
            </div>
        </div>
    );
};

export default Logo;

