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
                <InputText type="text" className="p-inputtext-sm" placeholder="Pseudo" />
                <Password value={value} className="p-inputtext-sm" onChange={(e) => setValue(e.target.value)} toggleMask />
            </form>
        </div>
    );
};

export default Login;
