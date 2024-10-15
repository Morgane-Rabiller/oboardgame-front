import "./Randomgame.scss";
import React, { useEffect, useState } from "react";
import { ToggleButton } from 'primereact/togglebutton';
import { InputNumber } from 'primereact/inputnumber';
import { Dropdown } from 'primereact/dropdown';
import { useDispatch, useSelector } from "react-redux";
import { eraseBoardgameSelected, eraseErrorMessage, selectRandomBoardgame } from "../../actions/library";
import Joyride from 'react-joyride';
import { useOutletContext } from "react-router-dom";

const Randomgame = () => {
    const { checkAccount } = useOutletContext();
    const hasSeenTutorial = localStorage.getItem('hasSeenRandomGameTutorial');
    
    
    const steps = [
      {
        target: '.logo-tuto',
        content: 'Bienvenue sur l\'application O\'Boardgame ! En cliquant sur ce logo, tu peux te rendre sur la page principale.',
      },
      {
        target: '.nb-player-tuto',
        content: 'Ici, tu donnes le nombre de joueurs',
      },
      {
        target: '.filter-tuto',
        content: 'En cliquant ici, tu peux filtrer ta recherche, si vous avez une préférence pour la durée du jeu, pour l\'age des joueurs et pour le type de jeu',
      },
      {
        target: '.select-random-game-tuto',
        content: 'Ici l\'application sélectionne pour toi un jeu aléatoire de ta bibliothèque personnelle en fonction des filtres que tu as déterminé.',
      },
      {
        target: '.library-tuto',
        content: 'Accès à ta bibliothèque personnelle',
      },
    ];
    const [checked, setChecked] = useState(false);
    const [players, setPlayers] = useState(3);
    const [age, setAge] = useState(2);
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

    const handleJoyrideCallback = (data) => {
        const { status } = data;
        const finishedStatuses = ['finished', 'skipped'];
        
        if (finishedStatuses.includes(status)) {
            localStorage.setItem('hasSeenRandomGameTutorial', true);
        }
    };

    return (
        <div className="randomgame">
        {!checkAccount && !hasSeenTutorial && <Joyride
          steps={steps}
          continuous
          showProgress
          showSkipButton
          callback={handleJoyrideCallback}
        />}
            <p className="mb-5">Bonjour { userPseudo } 👋</p>
            <div className="mb-3 flex justify-content-between align-items-baseline nb-player-tuto">
                <label htmlFor="minmax-buttons" className="block mb-2">Combien êtes-vous ?</label>
                <InputNumber inputId="minmax-buttons" size={1} maxLength={2} value={players} onValueChange={(e) => setPlayers(e.value)} mode="decimal" showButtons min={1} max={20} />
            </div>
            <div>
                <ToggleButton invalid onIcon="pi pi-eye" offIcon="pi pi-eye-slash" checked={checked} onChange={(e) => setChecked(e.value)} className="toggle-button w-8rem filter-tuto" onLabel="Filtres" offLabel="Filtres"/>
            </div>
            {checked && <div className="randomgame_filters">
                <div>
                    <label htmlFor="minmax-buttons" className="block mb-2">Durée</label>
                    <Dropdown value={selectedDuration} onChange={(e) => setSelectedDuration(e.value)} options={durations} optionLabel="name" 
                    placeholder="" className="w-full w-5rem" />
                </div>
                <div>
                    <label htmlFor="minmax-buttons" className="block mb-2">Age (Min)</label>
                    <InputNumber inputId="minmax-buttons" size={1} maxLength={2} value={age} onValueChange={(e) => setAge(e.value)} mode="decimal" showButtons min={2} max={18} />
                </div>
                <div>
                    <label htmlFor="minmax-buttons" className="block mb-2">Type</label>
                    <Dropdown value={selectedType} onChange={(e) => setSelectedType(e.value)} options={types} optionLabel="name" 
                    placeholder="" className="w-full w-7rem" />
                </div>
            </div>}
            
            <div className="randomgame_button-container">
                <button className="randomgame_button select-random-game-tuto" onClick={() => handleClick()}>Lancer la sélection aléatoire</button>
            </div>
            <div>
                {boardgameSelected && <p className="mt-7 font-bold border-2 border-purple-500 p-3 text-center">{boardgameSelected}</p>}
                {errorMessage && <p className="mt-7 font-bold border-2 border-red-500 p-3 text-center">{errorMessage}</p>}
            </div>
        </div>
    );
};

export default Randomgame;