import "./Randomgame.scss";
import React, { useEffect, useState } from "react";
import { ToggleButton } from 'primereact/togglebutton';
import { InputNumber } from 'primereact/inputnumber';
import { Dropdown } from 'primereact/dropdown';
import { useDispatch, useSelector } from "react-redux";
import { eraseBoardgameSelected, eraseErrorMessage, selectRandomBoardgame } from "../../actions/library";
import Joyride from 'react-joyride';

const Randomgame = () => {
    const steps = [
      {
        target: '.my-first-step',
        content: 'Bienvenue sur l\'application O\'Boardgame !',
      },
      {
        target: '.my-third-step',
        content: 'Ici, tu donnes le nombre de joueurs',
      },
      {
        target: '.my-fourth-step',
        content: 'Ici tu peux filtrer ta recherche, si vous avez une préférence pour la durée du jeu, pour l\'age des joueurs et pour le type de jeu',
      },
      {
        target: '.my-fifth-step',
        content: 'Ici l\'application sélectionne pour toi un jeu aléatoire de ta bibliothèque personnelle en fonction des filtres que tu as demandé',
      },
    ];
    const [checked, setChecked] = useState(false);
    const [players, setPlayers] = useState(3);
    const [age, setAge] = useState(25);
    const [selectedDuration, setSelectedDuration] = useState(null);
    const userPseudo = useSelector((state) => state.userReducer.pseudo);
    const errorMessage = useSelector((state) => state.libraryReducer.errorMessage);
    const boardgameSelected = useSelector((state) => state.libraryReducer.boardgameSelected);
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
        { name: "Cartes" },
        { name: "Dés" },
        { name: "Plateau" },
    ];
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(selectRandomBoardgame({players, time: selectedDuration && selectedDuration.name, age, type: selectedType && selectedType.name}));
    };

    useEffect(() => {
        if(errorMessage) {
            window.setTimeout(() => {
                dispatch(eraseErrorMessage());
            }, 1000);
        }
        if(boardgameSelected) {
            window.setTimeout(() => {
                dispatch(eraseBoardgameSelected());
            }, 5000);
        }
    })
    return (
        <div className="randomgame">
        <Joyride
          steps={steps}
          continuous
          showProgress
          showSkipButton
        />
            <p className="mb-5">Bonjour { userPseudo } 👋</p>
            <div className="mb-3 flex justify-content-between align-items-baseline my-third-step">
                <label htmlFor="minmax-buttons" className="block mb-2">Combien êtes-vous ?</label>
                <InputNumber inputId="minmax-buttons" size={1} maxLength={2} value={players} onValueChange={(e) => setPlayers(e.value)} mode="decimal" showButtons min={1} max={20} />
            </div>
            <div>
                <ToggleButton invalid onIcon="pi pi-eye" offIcon="pi pi-eye-slash" checked={checked} onChange={(e) => setChecked(e.value)} className="toggle-button w-8rem my-fourth-step" onLabel="Filtres" offLabel="Filtres"/>
            </div>
            {checked && <div className="randomgame_filters">
                <div>
                    <label htmlFor="minmax-buttons" className="block mb-2">Durée</label>
                    <Dropdown value={selectedDuration} onChange={(e) => setSelectedDuration(e.value)} options={durations} optionLabel="name" 
                    placeholder="" className="w-full w-5rem" />
                </div>
                <div>
                    <label htmlFor="minmax-buttons" className="block mb-2">Age (Max)</label>
                    <InputNumber inputId="minmax-buttons" size={1} maxLength={2} value={age} onValueChange={(e) => setAge(e.value)} mode="decimal" showButtons min={2} max={18} />
                </div>
                <div>
                    <label htmlFor="minmax-buttons" className="block mb-2">Type</label>
                    <Dropdown value={selectedType} onChange={(e) => setSelectedType(e.value)} options={types} optionLabel="name" 
                    placeholder="" className="w-full w-7rem" />
                </div>
            </div>}
            
            <div className="randomgame_button-container">
                <button className="randomgame_button my-fifth-step" onClick={() => handleClick()}>Lancer la sélection aléatoire</button>
            </div>
            <div>
                {boardgameSelected && <p className="mt-7 font-bold border-2 border-purple-500 p-3 text-center">{boardgameSelected}</p>}
                {errorMessage && <p className="mt-7 font-bold border-2 border-red-500 p-3 text-center">{errorMessage}</p>}
            </div>
        </div>
    );
};

export default Randomgame;