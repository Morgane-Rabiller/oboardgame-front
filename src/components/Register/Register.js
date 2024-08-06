import "./Register.scss";
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { useDispatch, useSelector } from "react-redux";
import { register, setUserField } from "../../actions/user";

const Register = () => {
    const pseudo = useSelector((state) => state.userReducer.pseudo);
    const email = useSelector((state) => state.userReducer.email);
    const password = useSelector((state) => state.userReducer.password);
    const passwordRepeat = useSelector((state) => state.userReducer.passwordRepeat);
    // const logged = useSelector((state) => state.userReducer.logged);
    // const error = useSelector((state) => state.userReducer.error);
    const dispatch = useDispatch();
    // const navigate = useNavigate();
    const changeField = (e) => {
        dispatch(setUserField(e.target.value, e.target.name));
    }
    
    const handleForm = (e) => {
        e.preventDefault();
        dispatch(register());
    }

    return (
        <div className="register">
            <h1 className="register_title">Je m'inscris</h1>
            <form className="register_form" onSubmit={e => handleForm(e)}>
                <InputText type="text" name="pseudo" className="register_form-pseudo p-inputtext-sm" value={pseudo} onChange={changeField} placeholder="Pseudo" />
                <InputText type="email" name="email" className="register_form-email p-inputtext-sm" value={email} onChange={changeField} placeholder="Adresse mail" />
                <Password value={password} name="password" className="register_form-password p-inputtext-sm" onChange={changeField} placeholder="Mot de passe" toggleMask />
                <Password value={passwordRepeat} name="passwordRepeat" className="register_form-password p-inputtext-sm" onChange={changeField} placeholder="Confirmation du mot de passe" toggleMask />
                <button type="submit" className="register_form-button">Créer mon compte</button>
                <p className="register_form-register">Déjà un compte ? <br/><br/> <a href="/connexion" className="register_form-link">Je me connecte</a></p>
            </form>
        </div>
    );
};

export default Register;
