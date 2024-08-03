import "./Footer.scss";
import profile from "../../assets/profile.png";
import power from "../../assets/power.png";
import { useDispatch } from "react-redux";
import { logout } from "../../actions/user";

const Footer = () => {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(logout());
    }
    return (
        <footer className="footer">
            <a href="https://google.com"><img src={profile} alt="profile" className="footer_profile" /></a>
            <p>Jeux de sociétés</p>
            <button type="button" className="footer_button" onClick={handleClick}> <img src={power} alt="logout" className="footer_logout" /> </button>
        </footer>
    );
};

export default Footer;