import { Link } from "react-router-dom";
import { InputSwitch } from 'primereact/inputswitch';
import { Button } from 'primereact/button';
import "./Settings.scss";
import { useState } from "react";

const Settings = () => {
    const [checked, setChecked] = useState(false);
    return (
        <div className="settings">
            <div className="flex justify-content-between mb-2 ">
                <p className="hover:underline">Thème</p>
                <InputSwitch checked={checked} onChange={(e) => setChecked(e.value)} />
            </div>
            <Button className="mb-2">Changer mon mot de passe</Button>
            <Button className="mb-2">Tuto</Button>
        </div>
    );
};

export default Settings;
