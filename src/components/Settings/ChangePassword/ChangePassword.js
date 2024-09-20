import { Password } from "primereact/password";
import "./ChangePassword.scss";
import { useEffect, useState } from "react";
import { Button } from "primereact/button";
import { useDispatch, useSelector } from "react-redux";
import { updatePassword } from "../../../actions/user";

const ChangePassword = () => {
    const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [newPasswordRepeat, setNewPasswordRepeat] = useState('');
    const [showError, setShowError] = useState(false);
    const errorMessage = useSelector((state) => state.userReducer.error);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updatePassword({password, newPassword, newPasswordRepeat}));

    }

    useEffect(() => {
        if(errorMessage) {
            console.log("je suis dans le useEffect");
            
            setShowError(true);
            window.setTimeout(() => {

                setShowError(false);
            }, 3000);
        }
    }, [errorMessage]);

    return (
        <form className="settings_changePassword mt-4" onSubmit={(e) => {handleSubmit(e)}}>
            <label>Ancien de passe</label>
            <Password value={password} className="mb-2" onChange={(e) => setPassword(e.target.value)} toggleMask />
            <label>Nouveau mot de passe</label>
            <Password value={newPassword} className="mb-2" onChange={(e) => setNewPassword(e.target.value)} toggleMask />
            <label>Confirmation du nouveau mot de passe</label>
            <Password value={newPasswordRepeat} className="mb-2" onChange={(e) => setNewPasswordRepeat(e.target.value)} toggleMask />
            <div className="text-center">
                <Button type="submit">Valider</Button>
            </div>
            {showError && <p className="text-red-800 mt-3">{errorMessage}</p>}
        </form>
    );
};

export default ChangePassword;
