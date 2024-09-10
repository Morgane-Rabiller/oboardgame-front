import { InputNumber } from "primereact/inputnumber";
import "./CreatePopUp.scss";
import { InputText } from "primereact/inputtext";
import { useState } from "react";
import { Dropdown } from "primereact/dropdown";

const CreatePopUp = () => {
    const [name, setName] = useState('');
    const [minPlayer, setMinPlayer] = useState(25);
    const [maxPlayer, setMaxPlayer] = useState(25);
    const [selectedCity, setSelectedCity] = useState(null);
    const cities = [
        { name: 'Cartes' },
        { name: 'Dés' },
        { name: 'Plateau' },
    ];
    return (
        <div>
            <InputText type="text" value={name} className="p-inputtext-sm mb-3" onChange={(e) => setName(e.target.value)} placeholder="Nom du jeu"/>
            <div className="flex-auto">
                <label htmlFor="min-buttons" className="block mb-2">Nombre de joueurs minimum et maximum</label>
                <div className="flex justify-content-between align-items-center">
                    <InputNumber inputId="min-buttons" value={minPlayer} onValueChange={(e) => setMinPlayer(e.value)} mode="decimal" showButtons min={0} max={100} />
                    - 
                    <InputNumber inputId="max-buttons" value={maxPlayer} onValueChange={(e) => setMaxPlayer(e.value)} mode="decimal" showButtons min={0} max={100} />
                </div>
            </div>
            <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name" 
                placeholder="Type du jeu" className="w-full md:w-14rem mt-3" />
        </div>
    )
}

export default CreatePopUp;