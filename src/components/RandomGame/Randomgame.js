import "./Randomgame.scss";
import React, { useState } from "react";
import { ToggleButton } from 'primereact/togglebutton';

const Randomgame = () => {
    const [checked, setChecked] = useState(false);
    return (
        <div className="randomgame">
            <div className="card flex justify-content-center">
            <ToggleButton invalid onIcon="pi pi-eye" offIcon="pi pi-eye-slash" checked={checked} onChange={(e) => setChecked(e.value)} className="toggle-button w-8rem" onLabel="Filter" offLabel="Filter"/>
        </div>
        </div>
    );
};

export default Randomgame;