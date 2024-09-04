import "./Library.scss";
import React, { useEffect, useRef, useState } from 'react';
import { deleteBoardgame, fetchLibrary, saveDataAfterUpdate, updateLibraryLine } from "../../actions/library";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "react-router-dom";
import Loader from '../Loader/Loader';
import TableDatas from "../TableDatas/TableDatas";
import { ConfirmPopup, confirmPopup } from 'primereact/confirmpopup';
import { Toast } from 'primereact/toast';
import { Dialog } from 'primereact/dialog';

const Library = () => {
    const toast = useRef(null);
    const { state } = useNavigation();
    const datas = useSelector((state) => state.libraryReducer.data);
    const [visible, setVisible] = useState(false);
    const [editMode, setEditMode] = useState(null); // State to track which row is being edited
    const [editedData, setEditedData] = useState({}); // State to store edited data

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchLibrary());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const accept = (boardgameId) => {
        toast.current.show({ severity: 'info', summary: 'Confirmation', detail: 'Jeu supprimé', life: 3000 });
        dispatch(deleteBoardgame(boardgameId))
    };

    const reject = () => {
        toast.current.show({ severity: 'warn', summary: 'Annulé', detail: 'Jeu gardé dans la bibliothèque', life: 3000 });
    };

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
        console.log("Saving data:", editedData);
        dispatch(updateLibraryLine(editedData));
        setEditMode(null);
    };

    const handleChange = (field, value) => {
        setEditedData({ ...editedData, [field]: value });
    };
    
    return (
        <div className="library_container">
            <Toast ref={toast} />
            {state === 'loading' && <Loader />}
            {datas && datas.length !== 0 ? 
            <div className="card">
                <table className="library_table">
                    <thead className="library_table-thead">
                        <tr className="library_table-line">
                            <th className="library_table-firstth">Nom</th>
                            <th>Joueurs</th>
                            <th>Type</th>
                            <th>Age</th>
                            <th>Durée</th>
                            <th>Edit</th>
                            <th>Supp.</th>
                        </tr>
                    </thead>
                    <tbody className="library_table-tbody">
                            {datas.map((data) => {
                                const isEditing = editMode === data.boardgame_id;
                                return (
                                    <tr className="library_table-line" key={data.boardgame_id}>
                                        <TableDatas
                                            name={isEditing ? <input type="text" className="w-12" value={editedData.name} onChange={(e) => handleChange('name', e.target.value)} /> : data.name}
                                            playerMin={isEditing ? <input type="number" className="w-6"  value={editedData.player_min} onChange={(e) => handleChange('player_min', e.target.value)} /> : data.player_min}
                                            playerMax={isEditing ? <input type="number" className="w-6"  value={editedData.player_max} onChange={(e) => handleChange('player_max', e.target.value)} /> : data.player_max}
                                            type={isEditing ? <select className="w-12"  value={editedData.type_game} onChange={(e) => handleChange('type_game', e.target.value)} >
                                                <option value="Cartes" key="1">Cartes</option>
                                                <option value="Dés" key="2">Dés</option>
                                                <option value="Plateau" key="3">Plateau</option>
                                            </select> : data.type_game}
                                            age={isEditing ? <input type="number" className="w-12"  value={editedData.age} onChange={(e) => handleChange('age', e.target.value)} /> : data.age}
                                            time={isEditing ? <select className="w-13"  value={editedData.time} onChange={(e) => handleChange('time', e.target.value)} >
                                                <option value="15" key="1">15</option>
                                                <option value="20" key="2">20</option>
                                                <option value="30" key="3">30</option>
                                                <option value="45" key="4">45</option>
                                                <option value="60+" key="5">60+</option>
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
                            <ConfirmPopup />
                    </tbody>
                </table>
                <Dialog header="Modifier le jeu" visible={visible} style={{ width: '50vw' }} onHide={() => { if (!visible) return; setVisible(false); }}>
                    <p className="m-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </Dialog>
            </div> 
            : 
            <p className="text-center m-5">Tu n'as pas de jeux dans ta bibliothèque</p>
            }
        </div>
    );
};

export default Library;