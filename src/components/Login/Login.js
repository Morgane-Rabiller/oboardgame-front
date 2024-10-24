
import "./Login.scss";
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { useDispatch, useSelector } from "react-redux";
import { login, setUserField, validateAccount } from "../../actions/user";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Loader from '../Loader/Loader';

const Login = () => {
    const email = useSelector((state) => state.userReducer.email);
    const password = useSelector((state) => state.userReducer.password);
    const logged = useSelector((state) => state.userReducer.logged);
    const error = useSelector((state) => state.userReducer.error);
    const checkAccount = useSelector((state) => state.userReducer.check);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    
    
    const randomgameTuto = localStorage.getItem('hasSeenRandomGameTutorial');
    const footerTuto = localStorage.getItem('hasSeenFooterTutorial');
    const boardgameTuto = localStorage.getItem('hasSeenBoardgameTutorial');
    const libraryTuto = localStorage.getItem('hasSeenLibraryTutorial');
    const changeField = (e) => {
        dispatch(setUserField(e.target.value, e.target.name));
    }

    const handleForm = (e) => {
        e.preventDefault();
        dispatch(login());
        setLoading(true);
    }

    useEffect(() =>{
        if(error) {
            setLoading(false);
        }
        if(logged) {
            setLoading(false);
            navigate("/selection-aleatoire");
            if (randomgameTuto && footerTuto && boardgameTuto && libraryTuto && !checkAccount) {
                // Changer check dans la base de données et dans le store
                dispatch(validateAccount());
            }
        }
        // eslint-disable-next-line
    }, [logged, navigate, randomgameTuto, footerTuto, boardgameTuto, libraryTuto, error])
    
    return (
        <div className="login">
            {loading && <Loader />}
            <h1 className="login_title">Je me connecte</h1>
            <form className="login_form" onSubmit={e => handleForm(e)}>
                <InputText type="text" className="login_form-email p-inputtext-sm" placeholder="Adresse mail" name="email" value={email} onChange={changeField} />
                <Password value={password} className="login_form-password p-inputtext-sm" onChange={changeField} name="password" placeholder="Mot de passe" toggleMask feedback={false}/>
                <Link to="/mot-de-passe-oublie" className="mt-2 text-sm">Mot de passe oublié ?</Link>
                {error && <p className="login_form-error">{ error }</p>}
                <button type="submit" className="login_form-button">Connexion</button>
                <p className="login_form-register text-sm">Pas de compte ? <br/><br/><a href="/inscription" className="login_form-link">Je m'inscris</a></p>
            </form>
        </div>
    );
};

export default Login;
