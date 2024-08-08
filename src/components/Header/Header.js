import "./Header.scss";
import logo from "../../assets/logo.png";
import library from "../../assets/library.png";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
    const logged = useSelector((state) => state.userReducer.logged);
    const location = useLocation();
    
    return (
        <header className="header">
            <div className="header-top">
                <div className="header-left">
                    <Link to={!logged ? "/" : "/selection-aleatoire"} className="header-link">
                        <img src={logo} className="header-left_logo" alt="logo" />
                        <h1 className="header-left_title">O'Boardgame</h1>
                    </Link> 
                </div>
                {logged &&  
                <div className="header-right">
                    <Link to="/bibliotheque" className="header-right_link">
                        <img
                            src={library}
                            alt="Bibliothèque"
                            className="header-right_logo"
                        />
                        <p className={location.pathname === "/bibliotheque" ? "header-right_p header-right_p-active" : "header-right_p"}>Ma bibliothèque</p>
                    </Link>
                </div>
                } 
            </div>
            <div className="header-separate">
                <hr />
            </div>
        </header>
    );
};

export default Header;
