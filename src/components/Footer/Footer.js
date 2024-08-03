import "./Footer.scss";
import profile from "../../assets/profile.png";
import logout from "../../assets/power.png";

const Footer = () => {
    return (
        <footer className="footer">
            <img src={profile} alt="profile" className="footer_profile" />
            <p>Jeux de sociétés</p>
            <img src={logout} alt="logout" className="footer_logout" />
        </footer>
    );
};

export default Footer;