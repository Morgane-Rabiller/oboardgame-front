import "./Randomgame.scss";
import React, { useState } from "react";
import { ToggleButton } from 'primereact/togglebutton';
import { InputNumber } from 'primereact/inputnumber';
import { Dropdown } from 'primereact/dropdown';
import card from "../../assets/card.png";
import dice from "../../assets/dice.png";
import pawn from "../../assets/pawn.png";

const Randomgame = () => {
    const [checked, setChecked] = useState(false);
    const [minPlayer, setMinPlayer] = useState(25);
    const [maxPlayer, setMaxPlayer] = useState(25);
    const [age, setAge] = useState(25);
    const [selectedDuration, setSelectedDuration] = useState(null);
    const durations = [
        { name: '---' },
        { name: '15' },
        { name: '30' },
        { name: '45' },
        { name: '60+' }
    ];
    const [ selectedType, setSelectedType] = useState(null);
    const types = [
        { name: "---" },
        { name: <img src={card} alt="cartes" className="img_card" /> },
        { name: <img src={dice} alt="dés" className="img" /> },
        { name: <img src={pawn} alt="pions" className="img" /> },
    ]
    return (
        <div className="randomgame">
            <div>
                <ToggleButton invalid onIcon="pi pi-eye" offIcon="pi pi-eye-slash" checked={checked} onChange={(e) => setChecked(e.value)} className="toggle-button w-8rem" onLabel="Filtres" offLabel="Filtres"/>
            </div>
            {checked && <div className="randomgame_filters">
                <div>
                    <label htmlFor="minmax-buttons" className="block mb-2">Min joueurs</label>
                    <InputNumber inputId="minmax-buttons" size={1} maxLength={2} value={minPlayer} onValueChange={(e) => setMinPlayer(e.value)} mode="decimal" showButtons min={1} max={20} />
                </div>
                <div>
                    <label htmlFor="minmax-buttons" className="block mb-2">Max joueurs</label>
                    <InputNumber inputId="minmax-buttons" size={1} maxLength={2} value={maxPlayer} onValueChange={(e) => setMaxPlayer(e.value)} mode="decimal" showButtons min={1} max={99} />
                </div>
                <div>
                    <label htmlFor="minmax-buttons" className="block mb-2">Durée</label>
                    <Dropdown value={selectedDuration} onChange={(e) => setSelectedDuration(e.value)} options={durations} optionLabel="name" 
                    placeholder="" className="w-full md:w-8rem" />
                </div>
                <div>
                    <label htmlFor="minmax-buttons" className="block mb-2">Age (Max)</label>
                    <InputNumber inputId="minmax-buttons" size={1} maxLength={2} value={age} onValueChange={(e) => setAge(e.value)} mode="decimal" showButtons min={2} max={18} />
                </div>
                <div>
                    <label htmlFor="minmax-buttons" className="block mb-2">Type</label>
                    <Dropdown value={selectedType} onChange={(e) => setSelectedType(e.value)} options={types} optionLabel="name" 
                    placeholder="" className="w-full md:w-10rem" />
                </div>
            </div>}
            
            <div className="randomgame_button-container">
                <button className="randomgame_button">Lancer la sélection aléatoire</button>
            </div>
        </div>
    );
};

export default Randomgame;