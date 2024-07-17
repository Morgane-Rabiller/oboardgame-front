import "./Randomgame.scss";
import React, { useState } from "react";
import { ToggleButton } from 'primereact/togglebutton';
import { InputNumber } from 'primereact/inputnumber';

const Randomgame = () => {
    const [checked, setChecked] = useState(false);
    const [minPlayer, setMinPlayer] = useState(25);
    const [maxPlayer, setMaxPlayer] = useState(25);
    const [age, setAge] = useState(25);
    return (
        <div className="randomgame">
            <div className="card flex justify-content-start">
                <ToggleButton invalid onIcon="pi pi-eye" offIcon="pi pi-eye-slash" checked={checked} onChange={(e) => setChecked(e.value)} className="toggle-button w-8rem" onLabel="Filter" offLabel="Filter"/>
            </div>
            <div className="randomgame_filters">
                <div>
                    <label htmlFor="minmax-buttons" className="block mb-2">Min joueurs</label>
                    <InputNumber inputId="minmax-buttons" size={1} maxLength={2} value={minPlayer} onValueChange={(e) => setMinPlayer(e.value)} mode="decimal" showButtons min={1} max={20} />
                </div>
                <div>
                    <label htmlFor="minmax-buttons" className="block mb-2">Max joueurs</label>
                    <InputNumber inputId="minmax-buttons" size={1} maxLength={2} value={maxPlayer} onValueChange={(e) => setMaxPlayer(e.value)} mode="decimal" showButtons min={1} max={99} />
                </div>
                <div>
                    <label htmlFor="minmax-buttons" className="block mb-2">Age (Max)</label>
                    <InputNumber inputId="minmax-buttons" size={1} maxLength={2} value={age} onValueChange={(e) => setAge(e.value)} mode="decimal" showButtons min={2} max={18} />
                </div>
            </div>
        </div>
    );
};

export default Randomgame;