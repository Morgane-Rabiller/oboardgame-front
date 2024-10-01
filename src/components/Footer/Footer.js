import "./Footer.scss";
import settings from "../../assets/settings.png";
import power from "../../assets/power.png";
import { useDispatch } from "react-redux";
import { logout } from "../../actions/user";
import { Link, NavLink } from "react-router-dom";
import Joyride from 'react-joyride';

const Footer = () => {
    const steps = [
      {
        target: '.my-second-step',
        content: 'Ici tu peux chercher des jeux afin de les ajouter à ta bibliothèque personnelle',
      },
      {
        target: '.my-sixth-step',
        content: 'Tu peux te rendre dans tes paramètres pour changer le thème de l\'application, changer ton mot de passe ou supprimer ton compte',
      },
      {
        target: '.my-seventh-step',
        content: 'Bouton de déconnexion',
      },
    ];
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(logout());
    }
    return (
        <>
        <Joyride
          steps={steps}
          continuous
          showProgress
          showSkipButton
        />
        <footer className="footer">
            <Link to="/parametres"><img src={settings} alt="profile" className="footer_setting my-sixth-step" /></Link>
            <NavLink className={({isActive}) => isActive ? "footer_link footer_link-active" : "footer_link my-second-step"} to="/jeux-de-societe">Jeux de société</NavLink>
            <button type="button" className="footer_button" onClick={handleClick}> <img src={power} alt="logout" className="footer_logout my-seventh-step" /> </button>
        </footer>
        </>
    );
};

export default Footer;