import "./Library.scss";
import React, { useEffect, useRef } from 'react';
import { deleteBoardgame, fetchLibrary } from "../../actions/library";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "react-router-dom";
import Loader from '../Loader/Loader';
import TableDatas from "../TableDatas/TableDatas";
import { ConfirmPopup, confirmPopup } from 'primereact/confirmpopup';
import { Toast } from 'primereact/toast';

const Library = () => {
    const toast = useRef(null);
    const { state } = useNavigation();
    const datas = useSelector((state) => state.libraryReducer.data);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchLibrary());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const accept = () => {
        toast.current.show({ severity: 'info', summary: 'Confirmation', detail: 'Jeu supprimé', life: 3000 });
        dispatch(deleteBoardgame());
    };

    const reject = () => {
        toast.current.show({ severity: 'warn', summary: 'Annulé', detail: 'Jeu gardé dans la bibliothèque', life: 3000 });
    };

    const confirm = (event) => {
        confirmPopup({
            target: event.currentTarget,
            message: 'Veux-tu vraiment supprimer ce jeu?',
            icon: 'pi pi-info-circle',
            defaultFocus: 'reject',
            acceptClassName: 'p-button-danger',
            accept,
            reject
        });
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
                                return (
                                        <tr className="library_table-line" key={data.boardgame_id}>
                                            <TableDatas name={data.name} playerMin={data.player_min} playerMax={data.player_max} type={data.type_game} age={data.age} time={data.time} />
                                            <td><i className="pi pi-pencil"></i></td>
                                            <td><i className="pi pi-trash" onClick={confirm} ></i></td>
                                        </tr>
                                    )
                                })}
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

export default Library;