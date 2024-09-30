import { useState } from "react";
import { Button } from "primereact/button";
// import { useDispatch } from "react-redux";
import { Dialog } from "primereact/dialog";
import { useNavigate } from "react-router-dom";
import { Password } from "primereact/password";

const UpdatePasword = () => {
    const [showDialog, setShowDialog] = useState(false); 
    const [password, setPassword] = useState(""); 
    const [passwordRepeat, setPasswordRepeat] = useState(""); 
    // const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className="forgotPassword text-center">
            <h1 className="mt-3 mb-3">Mot de passe oublié ?</h1>
            <form className="card flex justify-content-center flex-column mt-5 ml-5 mr-5" onSubmit={(e) => handleSubmit(e)}>
                <label className="text-sm text-left">Tu peux maintenant mettre à jour ton mot de passe</label>
                <Password value={password} className="mb-3 mt-2" onChange={(e) => setPassword(e.target.value)} placeholder="Nouveau mot de passe" toggleMask />
                <Password value={passwordRepeat} onChange={(e) => setPasswordRepeat(e.target.value)} placeholder="Confirmation du mot de passe"  toggleMask />
                <div>
                    <Button type="submit" className="mt-3 w-5 flex justify-content-center">Envoyer</Button>
                </div>
                <Dialog header="Mail envoyé ✔" className="forgotPassword_dialog" visible={showDialog} onHide={() => { if (!showDialog) return; setShowDialog(false); }} >
                    <p>Check ta boite mail et met à jour ton mot de passe !</p>
                    <div className="text-center mt-3">
                    <Button type="button" onClick={() => navigate("/connexion")}>Retour</Button>
                    </div>
                </Dialog>
            </form>
        </div>
    );
};

export default UpdatePasword;