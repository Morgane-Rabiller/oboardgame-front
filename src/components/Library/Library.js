import "./Library.scss";
import React, { useEffect, useRef, useState } from 'react';
import { deleteBoardgame, eraseErrorMessage, fetchLibrary, updateLibraryLine } from "../../actions/library";
import { useDispatch, useSelector } from "react-redux";
import TableDatas from "../TableDatas/TableDatas";
import { ConfirmPopup, confirmPopup } from 'primereact/confirmpopup';
import { Toast } from 'primereact/toast';
import { Message } from "primereact/message";
import Joyride from 'react-joyride';
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { InputText } from "primereact/inputtext";

const Library = () => {
    const hasSeenTutorial = localStorage.getItem('hasSeenLibraryTutorial');
    // eslint-disable-next-line
    const steps = [
        {
            target: '.search-library-tuto',
            content: 'Tu veux modifier ou supprimer un jeu mais ta liste est longue ? Cherche ton jeu facilement ici.',
        },
        {
            target: '.edit-tuto',
            content: 'Tu peux personnaliser les paramètres du jeu ici, si tu trouves qu\'ils ne correspondent pas à ta façon de jouer.',
        },
        {
            target: '.delete-tuto',
            content: 'Tu n\'a plus ce jeu chez toi ? Tu peux le supprimer de ta bibliothèque personnelle.',
        },
        {
            target: '.note-tuto',
            content: 'Tu as besoin de spécifier quelque chose sur un jeu ? (par ex : le jeu est prêté par tel personne). Tu peux ajouter une note en cliquant sur le nom du jeu. Tous les jeux qui contiennent une note seront colorés.',
        },
    ];
    const toast = useRef(null);
    const datas = useSelector((state) => state.libraryReducer.data);
    const [editMode, setEditMode] = useState(null); 
    const [editedData, setEditedData] = useState({});
    const [name, setName] = useState('');
    const [filteredDatas, setFilteredDatas] = useState([]);
    const errorMessage = useSelector((state) => state.libraryReducer.errorMessage);
    const [showMessage, setShowMessage] = useState(false);
    const dispatch = useDispatch();

    const accept = (boardgameId) => {
        toast.current.show({ severity: 'info', summary: 'Confirmation', detail: 'Jeu supprimé', life: 3000 });
        dispatch(deleteBoardgame(boardgameId))
    };

    const reject = () => {
        toast.current.show({ severity: 'warn', summary: 'Annulé', detail: 'Jeu gardé dans la bibliothèque', life: 3000 });
    };

    useEffect(() => {
        dispatch(fetchLibrary());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if(datas) {
            // Filtrer les données à chaque changement du champ de recherche ou des données
            const filtered = datas.filter((game) =>
                game.name.toLowerCase().includes(name.toLowerCase())
            );
            setFilteredDatas(filtered);
        }
        if (errorMessage) {
            setShowMessage(true);
            const timer = setTimeout(() => {
                setShowMessage(false);
                dispatch(eraseErrorMessage());
            }, 3000); 
            return () => clearTimeout(timer); // Nettoie le timeout si le composant se démonte
        }
        // eslint-disable-next-line
    }, [name, datas, errorMessage]);


    const confirm = (event, boardgameId) => {
        confirmPopup({
            target: event.currentTarget,
            message: 'Veux-tu vraiment supprimer ce jeu?',
            icon: 'pi pi-info-circle',
            defaultFocus: 'reject',
            acceptClassName: 'p-button-danger',
            accept: () => accept(boardgameId),
            reject
        });
    };

    const handleEditClick = (boardgameId, data) => {
        setEditMode(boardgameId);
        setEditedData(data);
    };
    
    const handleSaveClick = () => {
        dispatch(updateLibraryLine(editedData));
        setEditMode(null);
    };

    const handleChange = (field, value) => {
        setEditedData({ ...editedData, [field]: value });
    };
    const handleChangeName = (e) => {
        setName(e);
    }

    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        // Attendre que les éléments cibles soient montés avant de démarrer Joyride
        const checkTargets = () => {
            const allTargetsExist = steps.every(step => document.querySelector(step.target));
            if (allTargetsExist) {
                setIsReady(true);
            } else {
                setIsReady(false);
            }
        };

        checkTargets();  // Vérification initiale

        // Si les cibles sont montées plus tard, on relance la vérification
        const interval = setInterval(checkTargets, 500);
        return () => clearInterval(interval);  // Nettoyage du timer
    }, [steps]);
    
    const handleJoyrideCallback = (data) => {
        const { status } = data;
        const finishedStatuses = ['finished', 'skipped'];
        
        if (finishedStatuses.includes(status)) {
            setTimeout(() => {
                localStorage.setItem('hasSeenLibraryTutorial', true);
            }); 
        }
    };

    return (
        <div className="library_container">
        {isReady  && <Joyride
            steps={steps}
            continuous
            showProgress
            showSkipButton
            callback={handleJoyrideCallback}
            run={!hasSeenTutorial}
        />}
            {showMessage  && <Message severity="error" text={errorMessage} />}
            <Toast ref={toast} />
            
            <IconField iconPosition="right" className="mt-3 ml-2 mr-2 text-right">
                <InputIcon className="pi pi-search"> </InputIcon>
                <InputText placeholder="Je recherche un jeu" className="p-inputtext-sm  search-library-tuto" value={name} onChange={(e) => handleChangeName(e.target.value)} />
            </IconField>
            {filteredDatas && filteredDatas.length !== 0 ? 
            <div className="card">
                <table className="library_table">
                    <thead className="library_table-thead">
                        <tr className="library_table-line">
                            <th className="library_table-firstth note-tuto">Nom</th>
                            <th>Joueurs</th>
                            <th>Type</th>
                            <th>Age</th>
                            <th>Durée</th>
                            <th className="edit-tuto">Edit</th>
                            <th className="delete-tuto">Supp.</th>
                        </tr>
                    </thead>
                    <tbody className="library_table-tbody">
                            {filteredDatas.map((data) => {
                                const isEditing = editMode === data.boardgame_id;
                                return (
                                    <tr className="library_table-line" key={data.boardgame_id}>
                                        <TableDatas
                                            noteId={data.boardgame_id}
                                            name={isEditing ? <input type="text" className="w-12" value={editedData.name} onChange={(e) => handleChange('name', e.target.value)} /> : data.name}
                                            isEditing={isEditing}
                                            playerMin={isEditing ? <input type="number"className="w-6" min="1" max="10" value={editedData.player_min} onChange={(e) => handleChange('player_min', e.target.value)} /> : data.player_min}
                                            playerMax={isEditing ? <input type="number" className="w-6" min="1" max="50" value={editedData.player_max} onChange={(e) => handleChange('player_max', e.target.value)} /> : data.player_max}
                                            type={isEditing ? <select className="w-12"  value={editedData.type_game} onChange={(e) => handleChange('type_game', e.target.value)} >
                                                <option value="Cartes" key="1">Cartes</option>
                                                <option value="Dés" key="2">Dés</option>
                                                <option value="Plateau" key="3">Plateau</option>
                                            </select> : data.type_game}
                                            age={isEditing ? <input type="number" className="w-12" min="2" value={editedData.age} onChange={(e) => handleChange('age', e.target.value)} /> : data.age}
                                            time={isEditing ? <select className="w-13"  value={editedData.time} onChange={(e) => handleChange('time', e.target.value)} >
                                                <option value="5" key="1">5</option>
                                                <option value="10" key="2">10</option>
                                                <option value="15" key="3">15</option>
                                                <option value="20" key="4">20</option>
                                                <option value="25" key="5">25</option>
                                                <option value="30" key="6">30</option>
                                                <option value="35" key="7">35</option>
                                                <option value="40" key="8">40</option>
                                                <option value="45" key="9">45</option>
                                                <option value="50" key="10">50</option>
                                                <option value="55" key="11">55</option>
                                                <option value="60" key="12">60</option>
                                                <option value="90" key="13">90</option>
                                                <option value="120" key="14">120</option>
                                            </select> : data.time}
                                        />
                                        <td>
                                            {isEditing ? (
                                                <i className="pi pi-check" onClick={handleSaveClick}></i>
                                            ) : (
                                                <i className="pi pi-pencil" onClick={() => handleEditClick(data.boardgame_id, data)}></i>
                                            )}
                                        </td>
                                        <td>
                                            <i className="pi pi-trash" onClick={(event) => confirm(event, data.boardgame_id)}></i>
                                        </td>
                                    </tr>
                                )
                            })}
                            {!filteredDatas && <p>Pas de jeu correspondant à ta recherche</p>}
                            <ConfirmPopup />
                    </tbody>
                </table>
            </div> 
            :
            
            <p className="text-center m-5">Tu n'as pas de jeux dans ta bibliothèque</p>
            }
        </div>
    );
};

export default React.memo(Library);