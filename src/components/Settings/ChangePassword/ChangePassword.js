import { Password } from "primereact/password";
import { useEffect, useState } from "react";
import { Button } from "primereact/button";
import { useDispatch, useSelector } from "react-redux";
import { eraseMessage, updatePassword } from "../../../actions/user";

const ChangePassword = ({ onSuccess }) => {
    const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [newPasswordRepeat, setNewPasswordRepeat] = useState('');
    const [showError, setShowError] = useState(false);
    const errorMessage = useSelector((state) => state.userReducer.error);
    const [submitted, setSubmitted] = useState(false);
    const dispatch = useDispatch();
    
    useEffect(() => {
        if(errorMessage) {
            setShowError(true);
            setSubmitted(false);
            window.setTimeout(() => {
                setShowError(false);
                dispatch(eraseMessage());
            }, 3000);
        } else if(submitted){
            onSuccess();
        }
        // eslint-disable-next-line
    }, [errorMessage, dispatch, onSuccess]);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updatePassword({password, newPassword, newPasswordRepeat}));
        setSubmitted(true);
    }
    
    return (
        <form className="settings_changePassword mt-4" onSubmit={(e) => {handleSubmit(e)}}>
            <label>Ancien de passe</label>
            <Password value={password} className="mb-3" onChange={(e) => setPassword(e.target.value)} toggleMask />
            <label>Nouveau mot de passe</label>
            <Password value={newPassword} className="mb-3" onChange={(e) => setNewPassword(e.target.value)} toggleMask />
            <label>Confirmation du nouveau mot de passe</label>
            <Password value={newPasswordRepeat} className="mb-5" onChange={(e) => setNewPasswordRepeat(e.target.value)} toggleMask />
            <div className="text-center">
                <Button type="submit">Valider</Button>
            </div>
            {showError && <p className="text-red-800 mt-3">{errorMessage}</p>}
        </form>
    );
};

export default ChangePassword;
