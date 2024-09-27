
import "./Login.scss";
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { useDispatch, useSelector } from "react-redux";
import { login, setUserField } from "../../actions/user";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import ForgotPassword from "./ForgotPassword/ForgotPassword";

const Login = () => {
    const email = useSelector((state) => state.userReducer.email);
    const password = useSelector((state) => state.userReducer.password);
    const logged = useSelector((state) => state.userReducer.logged);
    const error = useSelector((state) => state.userReducer.error);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const changeField = (e) => {
        dispatch(setUserField(e.target.value, e.target.name));
    }

    const handleForm = (e) => {
        e.preventDefault();
        dispatch(login());
    }

    useEffect(() =>{
        if(logged) {
            navigate("/selection-aleatoire");
        }
    }, [logged, navigate])
    
    return (
        <div className="login">
            <h1 className="login_title">Je me connecte</h1>
            <form className="login_form" onSubmit={e => handleForm(e)}>
                <InputText type="text" className="login_form-email p-inputtext-sm" placeholder="Adresse mail" name="email" value={email} onChange={changeField} />
                <Password value={password} className="login_form-password p-inputtext-sm" onChange={changeField} name="password" placeholder="Mot de passe" toggleMask />
                <Link to="/mot-de-passe-oublie" className="mt-2 text-sm">Mot de passe oublié ?</Link>
                {error && <p className="login_form-error">{ error }</p>}
                <button type="submit" className="login_form-button">Connexion</button>
                <p className="login_form-register text-sm">Pas de compte ? <br/><br/><a href="/inscription" className="login_form-link">Je m'inscris</a></p>
            </form>
        </div>
    );
};

export default Login;
