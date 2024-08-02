
import "./Login.scss";
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { useDispatch, useSelector } from "react-redux";
import { login, setUserField } from "../../actions/user";
import { useNavigate } from "react-router-dom";

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
        if(logged) {
            navigate("/selection-aleatoire");
        }
    }
    
    return (
        <div className="login">
            <h1 className="login_title">Je me connecte</h1>
            <form className="login_form" onSubmit={e => handleForm(e)}>
                <InputText type="text" className="login_form-pseudo p-inputtext-sm" placeholder="Adresse mail" name="email" value={email} onChange={changeField} />
                <Password value={password} className="login_form-password p-inputtext-sm" onChange={changeField} name="password" placeholder="Mot de passe" toggleMask />
                {error && <p className="login_form-error">{ error }</p>}
                <button type="submit" className="login_form-button">Connexion</button>
                <p className="login_form-register">Pas de compte ? <br/><br/><a href="/inscription" className="login_form-link">Je m'inscris</a></p>
            </form>
        </div>
    );
};

export default Login;
