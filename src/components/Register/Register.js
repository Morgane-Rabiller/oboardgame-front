import { useState } from "react";
import "./Register.scss";
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';

const Register = () => {
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');
    return (
        <div className="register">
            <h1 className="register_title">Je m'inscris</h1>
            <form className="register_form">
                <InputText type="text" className="register_form-pseudo p-inputtext-sm" placeholder="Pseudo" />
                <InputText type="email" className="register_form-email p-inputtext-sm" placeholder="Adresse mail" />
                <Password value={password} className="register_form-password p-inputtext-sm" onChange={(e) => setPassword(e.target.password)} placeholder="Mot de passe" toggleMask />
                <Password value={passwordRepeat} className="register_form-password p-inputtext-sm" onChange={(e) => setPasswordRepeat(e.target.passwordRepeat)} placeholder="Confirmation du mot de passe" toggleMask />
                <button className="register_form-button">Créer mon compte</button>
                <p className="register_form-register">Déjà un compte ? <br/><br/> <a href="/connexion" className="register_form-link">Je me connecte</a></p>
            </form>
        </div>
    );
};

export default Register;
