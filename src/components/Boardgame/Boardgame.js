import "./Boardgame.scss";
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "react-router-dom";
import Loader from '../Loader/Loader';
import TableDatas from "../TableDatas/TableDatas";
import { eraseSuccessMessageBoardgame, fetchBoardgames } from "../../actions/boardgame";
import { addBoardgame, eraseErrorMessage, eraseSuccessMessage } from "../../actions/library";
import { Message } from 'primereact/message';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import CreatePopUp from "./CreatePopUp/CreatePopUp";

const Boardgame = () => {
    const { state } = useNavigation();
    const datas = useSelector((state) => state.boardgameReducer.data);
    const successMessage = useSelector((state) => state.libraryReducer.successMessage);
    const successMessageBoardgame = useSelector((state) => state.boardgameReducer.successMessage);
    const errorMessage = useSelector((state) => state.libraryReducer.errorMessage);
    const dispatch = useDispatch();
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [showSuccessBoardgameMessage, setShowSuccessBoardgameMessage] = useState(false);
    const [showErrorMessage, setShowErrorMessage] = useState(false);
    const [visible, setVisible] = useState(false);
    const [name, setName] = useState('');
    const [filteredDatas, setFilteredDatas] = useState([]);

    useEffect(() => {
        dispatch(fetchBoardgames());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (successMessage) {
            setShowSuccessMessage(true);
            const timer = setTimeout(() => {
                setShowSuccessMessage(false);
                dispatch(eraseSuccessMessage());
            }, 3000); // Cache le message après 3 secondes (3000ms)
            return () => clearTimeout(timer); // Nettoie le timeout si le composant se démonte
        }
        if (errorMessage) {
            setShowErrorMessage(true);
            const timer = setTimeout(() => {
                setShowErrorMessage(false);
                dispatch(eraseErrorMessage());
            }, 3000); // Cache le message après 3 secondes (3000ms)
            return () => clearTimeout(timer); // Nettoie le timeout si le composant se démonte
        }
        // eslint-disable-next-line
    }, [successMessage, successMessageBoardgame, errorMessage]);

    useEffect(() => {
        if(datas) {
            // Filtrer les données à chaque changement du champ de recherche ou des données
            const filtered = datas.filter((game) =>
                game.name.toLowerCase().includes(name.toLowerCase())
            );
            setFilteredDatas(filtered);
        }
    }, [name, datas]);

    const handleSuccess = () => {
        // Ferme la popup si l'ajout est réussi
        setVisible(false);
        
        console.log("successMessageBoargame", successMessageBoardgame);
        if (successMessageBoardgame) {
            setShowSuccessBoardgameMessage(true);
            const timer = setTimeout(() => {
                setShowSuccessBoardgameMessage(false);
                dispatch(eraseSuccessMessageBoardgame());
            }, 3000); // Cache le message après 3 secondes (3000ms)
            return () => clearTimeout(timer); // Nettoie le timeout si le composant se démonte
        }
    }

    const handleChange = (e) => {
        setName(e);
        // findBoardgame(datas, name);
    }
    
    return (
        <div className="library_container h-30rem">
            {state === 'loading' && <Loader />}
            {showSuccessMessage  && <Message severity="success" className="absolute" text={successMessage} />}
            {showSuccessBoardgameMessage  && <Message severity="success" className="absolute" text={successMessageBoardgame} />}
            {showErrorMessage  && <Message severity="error" className="absolute" text={errorMessage} />}
            <div className="text-left ml-2">
                <p className="text-sm mb-2">Mon jeu n'est pas présent dans la liste ?</p>
                <div className="flex justify-content-between align-items-start">
                    <button type="button" className="library_button-addgame mt-2" onClick={() => setVisible(true)}>Ajouter un jeu</button>
                    <IconField iconPosition="right" className="mt-2 ml-2 mr-2 text-right">
                        <InputIcon className="pi pi-search"> </InputIcon>
                        <InputText placeholder="Je recherche mon jeu" className="p-inputtext-sm" value={name} onChange={(e) => handleChange(e.target.value)} />
                    </IconField>
                </div>
            </div>
            {filteredDatas && filteredDatas.length !== 0 ? 
            <div className="card">
                <table className="library_table">
                    <thead className="library_table-thead">
                        <tr className="library_table-line">
                            <th className="library_table-firstth">Nom</th>
                            <th>Joueurs</th>
                            <th>Type</th>
                            <th>Age</th>
                            <th>Durée</th>
                            <th>Ajout</th>
                        </tr>
                    </thead>
                    <tbody className="library_table-tbody">
                            {filteredDatas.map((data) => {
                                return (
                                        <tr className="library_table-line" key={data.id}>
                                            <TableDatas name={data.name} playerMin={data.player_min} playerMax={data.player_max} type={data.type} age={data.age} time={data.time} />
                                            <td><i className="pi pi-plus" onClick={() => dispatch(addBoardgame(data.name))}></i></td>
                                        </tr>
                                    )
                            })}
                    </tbody>
                </table>
            </div> 
            : 
            <p className="text-center m-5">Pas de jeux de société dans la base de données.</p>
            }
                <Dialog header="Ajouter un jeu" visible={visible} style={{ width: '50vw' }} onHide={() => { if (!visible) return; setVisible(false); }}>
                    <CreatePopUp onSuccess={handleSuccess} />
                </Dialog>
        </div>
    );
};

export default React.memo(Boardgame);