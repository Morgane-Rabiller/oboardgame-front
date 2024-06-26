import "./Header.scss";
import logo from '../../assets/logo.png';

const Header = () => {
    return (
        <header className="header">
            <div className="header_first">
                <img src={logo} className="header-logo" alt="logo" />
                <h1 className="header-title">O'Boardgame</h1>
            </div>
            <div className="header_separate">
                <hr />
            </div>
        </header>
    );
};

export default Header;
