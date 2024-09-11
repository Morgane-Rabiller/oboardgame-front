import { InputNumber } from "primereact/inputnumber";
import "./CreatePopUp.scss";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { useState } from "react";
import { Dropdown } from "primereact/dropdown";
import { addGeneralBoardgame } from "../../../actions/boardgame";
import { useDispatch } from "react-redux";

const CreatePopUp = ({ onSuccess }) => {
    const [name, setName] = useState('');
    const [minPlayer, setMinPlayer] = useState(1);
    const [maxPlayer, setMaxPlayer] = useState(5);
    const [age, setAge] = useState(2);
    const [selectedType, setSelectedType] = useState(null);
    const dispatch = useDispatch();
    const types = [
        { name: 'Cartes' },
        { name: 'Dés' },
        { name: 'Plateau' },
    ];
    const [selectedTime, setselectedTime] = useState(null);
    const times = [
        { name: 10 },
        { name: 15 },
        { name: 20 },
        { name: 25 },
        { name: 30 },
        { name: 45 },
        { name: 60 },
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addGeneralBoardgame(
            { 
                name, 
                player_min: minPlayer,
                player_max: maxPlayer,
                type: selectedType.name,
                age,
                time: selectedTime.name 
            }
        ));

        onSuccess();
    }
    return (
        <form onSubmit={(e) => handleSubmit(e)} >
            <InputText type="text" value={name} className="p-inputtext-sm mb-3" onChange={(e) => setName(e.target.value)} placeholder="Nom du jeu"/>
            <div className="flex-auto">
                <label htmlFor="min-buttons" className="block mb-2 text-sm">Nombre de joueurs minimum et maximum</label>
                <div className="flex justify-content-between align-items-center">
                    <InputNumber inputId="min-buttons" value={minPlayer} onValueChange={(e) => setMinPlayer(e.value)} mode="decimal" showButtons min={0} max={100} />
                    - 
                    <InputNumber inputId="max-buttons" value={maxPlayer} onValueChange={(e) => setMaxPlayer(e.value)} mode="decimal" showButtons min={0} max={100} />
                </div>
            </div>
            <Dropdown value={selectedType} onChange={(e) => setSelectedType(e.value)} options={types} optionLabel="name" 
            placeholder="Type du jeu" className="w-full md:w-14rem mt-3" />
            <label htmlFor="min-buttons" className="block mb-2 mt-3 text-sm">Age</label>
            <InputNumber inputId="max-buttons" value={age} onValueChange={(e) => setAge(e.value)} mode="decimal" showButtons min={0} max={100} />
            <Dropdown value={selectedTime} onChange={(e) => setselectedTime(e.value)} options={times} optionLabel="name" 
            placeholder="Durée du jeu" className="w-full md:w-14rem mt-3" />
            <div className="flex justify-content-center">
                <Button type="submit" className="text-sm mt-3">Ajouter</Button>
            </div>
        </form>
    )
}

export default CreatePopUp;