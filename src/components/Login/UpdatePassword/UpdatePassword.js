import { useEffect, useState } from "react";
import { Button } from "primereact/button";
import { useDispatch, useSelector } from "react-redux";
import { Dialog } from "primereact/dialog";
import { useNavigate, useParams } from "react-router-dom";
import { Password } from "primereact/password";
import { eraseMessage, newPasswordIfForgot } from "../../../actions/user";

const UpdatePasword = () => {
    const [showDialog, setShowDialog] = useState(false); 
    const [password, setPassword] = useState(""); 
    const [passwordRepeat, setPasswordRepeat] = useState("");
    const passwordSuccess = useSelector((state) => state.userReducer.message);
    const passwordFailure = useSelector((state) => state.userReducer.error); 
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {token} = useParams();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(newPasswordIfForgot(token, password, passwordRepeat));
        
        if(passwordSuccess) {
            setShowDialog(true);
            window.setTimeout(() => {
                dispatch(eraseMessage());
            }, 3000);
        }
    };

    useEffect(() => {
        if(passwordFailure) {
            window.setTimeout(() => {
                dispatch(eraseMessage());
            }, 3000);
        }
    })

    return (
        <div className="forgotPassword text-center">
            <h1 className="mt-3 mb-3">Mot de passe oublié ?</h1>
            <form className="card flex justify-content-center flex-column mt-5 ml-5 mr-5" onSubmit={(e) => handleSubmit(e)}>
                <label className="text-sm text-left">Tu peux maintenant mettre à jour ton mot de passe</label>
                <Password value={password} className="mb-3 mt-2" onChange={(e) => setPassword(e.target.value)} placeholder="Nouveau mot de passe" toggleMask />
                <Password value={passwordRepeat} onChange={(e) => setPasswordRepeat(e.target.value)} placeholder="Confirmation du mot de passe"  toggleMask />
                {passwordFailure && <p className="text-red-300 text-left mt-2">{passwordFailure}</p>}
                <div>
                    <Button type="submit" className="mt-3 w-5 flex justify-content-center">Envoyer</Button>
                </div>
                <Dialog header="Mail envoyé ✔" className="forgotPassword_dialog" visible={showDialog} onHide={() => { if (!showDialog) return; setShowDialog(false); }} >
                    <p>Ton mot de passe est bien modifié ! <br />
                    Tu peux te connecter à ton compte.</p>
                    <div className="text-center mt-3">
                    <Button type="button" onClick={() => navigate("/connexion")}>Retour</Button>
                    </div>
                </Dialog>
            </form>
        </div>
    );
};

export default UpdatePasword;