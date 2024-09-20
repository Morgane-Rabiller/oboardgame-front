import { InputSwitch } from 'primereact/inputswitch';
import { Button } from 'primereact/button';
import "./Settings.scss";
import { useEffect, useState } from "react";
import { Dialog } from "primereact/dialog";
import ChangePassword from "./ChangePassword/ChangePassword";

const Settings = () => {
    const [visible, setVisible] = useState(false);
    const [checked, setChecked] = useState(() => {
        const savedTheme = localStorage.getItem('theme');
        return savedTheme === 'light';
    });

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

    return (
        <div className="settings">
            <div className="flex justify-content-between mb-2 ">
                <p>Thème { checked ? "clair" : "sombre" }</p>
                <InputSwitch checked={checked} onChange={(e) => setChecked(e.value)} />
            </div>
            <Button type="button" className="mb-2" onClick={() => setVisible(true)}>Changer mon mot de passe</Button>
            <Dialog header="Changer le mot de passe" className="changePassword" visible={visible} onHide={() => { if (!visible) return; setVisible(false); }}>
                    <ChangePassword  />
            </Dialog>
            <Button className="mb-2">Tuto</Button>
        </div>
    );
};

export default Settings;
