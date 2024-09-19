import { Password } from "primereact/password";
import "./ChangePassword.scss";
import { useState } from "react";
import { Button } from "primereact/button";

const ChangePassword = () => {
    const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    return (
        <form className="settings_changePassword mt-4">
            <label>Ancien de passe</label>
            <Password value={password} className="mb-2" onChange={(e) => setPassword(e.target.value)} toggleMask />
            <label>Nouveau mot de passe</label>
            <Password value={newPassword} className="mb-2" onChange={(e) => setNewPassword(e.target.value)} toggleMask />
            <label>Confirmation du nouveau mot de passe</label>
            <Password value={password} className="mb-2" onChange={(e) => setPassword(e.target.value)} toggleMask />
                <div className="text-center">
            <Button>Valider</Button>
            </div>
        </form>
    );
};

export default ChangePassword;
