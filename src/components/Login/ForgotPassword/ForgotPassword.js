import { useEffect, useState } from "react";
import "./ForgotPassword.scss";
import { InputText } from 'primereact/inputtext';
import { Button } from "primereact/button";
import { useDispatch, useSelector } from "react-redux";
import { eraseMessage, forgotPassword } from "../../../actions/user";
import { Dialog } from "primereact/dialog";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [showDialog, setShowDialog] = useState(false);
    const emailSuccess = useSelector((state) => state.userReducer.message);
    const emailFailure = useSelector((state) => state.userReducer.error);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(forgotPassword(email));
        if(emailSuccess) {
            setShowDialog(true);
            dispatch(eraseMessage());
        }
    };

    useEffect(() => {
        if(emailFailure) {
            window.setTimeout(() => {
                dispatch(eraseMessage());
            }, 3000);
        }
    })

    return (
        <div className="forgotPassword text-center">
            <h1 className="mt-3 mb-3">Mot de passe oublié ?</h1>
            <form className="card flex justify-content-center flex-column mt-5 ml-5 mr-5" onSubmit={(e) => handleSubmit(e)}>
                <label className="text-sm text-left">Rentre ton adresse mail et tu recavra le lien pour mettre à jour ton mot de passe</label>
                <InputText value={email} className="p-inputtext-sm mt-2 mb-2" placeholder="Adresse email" onChange={(e) => setEmail(e.target.value)} />
                {emailFailure && <p className="text-red-300 text-left">{emailFailure}</p>}
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

export default ForgotPassword;