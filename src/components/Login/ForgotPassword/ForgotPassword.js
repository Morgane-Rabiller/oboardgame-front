import { useState } from "react";
import "./ForgotPassword.scss";
import { InputText } from 'primereact/inputtext';
import { Button } from "primereact/button";

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    return (
        <div className="forgotPassword text-center">
            <h1 className="mt-3 mb-3">Mot de passe oublié ?</h1>
            <form className="card flex justify-content-center flex-column mt-5 ml-5 mr-5">
                <label className="text-sm text-left">Rentre ton adresse mail et tu recavra le lien pour mettre à jour ton mot de passe</label>
                <InputText value={email} className="p-inputtext-sm mt-2" placeholder="Adresse email" onChange={(e) => setEmail(e.target.value)} />
                <div>
                    <Button type="submit" className="mt-3 w-5 flex justify-content-center">Envoyer</Button>
                </div>
            </form>
        </div>
    );
};

export default ForgotPassword;