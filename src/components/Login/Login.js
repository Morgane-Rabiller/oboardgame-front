import { useState } from "react";
import "./Login.scss";
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';

const Login = () => {
    const [value, setValue] = useState('');
    return (
        <div className="login">
            <h1 className="login_title">Je me connecte</h1>
            <form className="login_form">
                <InputText type="text" className="login_form-pseudo p-inputtext-sm" placeholder="Pseudo" />
                <Password value={value} className="login_form-password p-inputtext-sm" onChange={(e) => setValue(e.target.value)} placeholder="Mot de passe" toggleMask />
                <button className="login_form-button">Je me connecte</button>
                <p className="login_form-register">Pas de compte ? <br/> <a href="#" className="login_form-link">Je m'inscris</a></p>
            </form>
        </div>
    );
};

export default Login;
