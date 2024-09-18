import "./Footer.scss";
import settings from "../../assets/settings.png";
import power from "../../assets/power.png";
import { useDispatch } from "react-redux";
import { logout } from "../../actions/user";
import { NavLink } from "react-router-dom";

const Footer = () => {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(logout());
    }
    return (
        <footer className="footer">
            <a href="https://google.com"><img src={settings} alt="profile" className="footer_setting" /></a>
            <NavLink className={({isActive}) => isActive ? "footer_link footer_link-active" : "footer_link"} to="/jeux-de-societe">Jeux de société</NavLink>
            <button type="button" className="footer_button" onClick={handleClick}> <img src={power} alt="logout" className="footer_logout" /> </button>
        </footer>
    );
};

export default Footer;