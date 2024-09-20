import { InputSwitch } from 'primereact/inputswitch';
import { Button } from 'primereact/button';
import "./Settings.scss";
import { useEffect, useState } from "react";
import { Dialog } from "primereact/dialog";
import ChangePassword from "./ChangePassword/ChangePassword";
import { useDispatch, useSelector } from 'react-redux';
import { eraseMessage } from '../../actions/user';
import { Message } from 'primereact/message';

const Settings = () => {
    const [visible, setVisible] = useState(false);
    const [checked, setChecked] = useState(() => {
        const savedTheme = localStorage.getItem('theme');
        return savedTheme === 'light';
    });
    const successMessage = useSelector((state) => state.userReducer.message);
    const [showSuccess, setShowSuccess] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        // Lorsque l'état 'checked' change, on met à jour les variables CSS globales
        if (checked) {
            document.documentElement.style.setProperty('--background-color', '#ffffff');
            document.documentElement.style.setProperty('--writing-color', '#161616');
            localStorage.setItem('theme', 'light');  // Sauvegarder le thème clair
        } else {
            document.documentElement.style.setProperty('--background-color', '#2d2d2d');
            document.documentElement.style.setProperty('--writing-color', '#D0D0D0');
            localStorage.setItem('theme', 'dark');   // Sauvegarder le thème sombre
        }
    }, [checked]);

    const handleSuccess = () => {
        // Ferme la popup si l'ajout est réussi
        setVisible(false);
        
        if (successMessage) {
            setShowSuccess(true);
            const timer = setTimeout(() => {
                setShowSuccess(false);
                dispatch(eraseMessage());
            }, 3000); // Cache le message après 3 secondes (3000ms)
            return () => clearTimeout(timer); // Nettoie le timeout si le composant se démonte
        }
    }

    return (
        <div className="settings">
            {showSuccess  && <Message severity="success" className="absolute" text={successMessage} />}
            <div className="flex justify-content-between mb-2 ">
                <p>Thème { checked ? "clair" : "sombre" }</p>
                <InputSwitch checked={checked} onChange={(e) => setChecked(e.value)} />
            </div>
            <Button type="button" className="mb-2" onClick={() => setVisible(true)}>Changer mon mot de passe</Button>
            <Dialog header="Changer le mot de passe" className="changePassword" visible={visible} onHide={() => { if (!visible) return; setVisible(false); }}>
                <ChangePassword onSuccess={handleSuccess} />
            </Dialog>
            <Button className="mb-2">Tuto</Button>
        </div>
    );
};

export default Settings;
