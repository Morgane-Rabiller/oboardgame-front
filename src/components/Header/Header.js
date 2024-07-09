import "./Header.scss";
import logo from "../../assets/logo.png";
import library from "../../assets/library.png";

const Header = () => {
    return (
        <header className="header">
            <div className="header-top">
                <div className="header-left">
                    <img src={logo} className="header-left_logo" alt="logo" />
                    <h1 className="header-left_title">O'Boardgame</h1>
                </div>
                {/* {isLogged &&  */}
                <div className="header-right">
                    <a href="https://google.com" className="header-right_link">
                        <img
                            src={library}
                            alt="Bibliothèque"
                            className="header-right_logo"
                        />
                        <p className="header-right_p">Ma bibliothèque</p>
                    </a>
                </div>
                {/* } */}
            </div>
            <div className="header-separate">
                <hr />
            </div>
        </header>
    );
};

export default Header;
