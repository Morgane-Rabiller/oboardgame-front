import "./Library.scss";
import React, { useEffect } from 'react';
// import { DataTable } from 'primereact/datatable';
// import { Column } from 'primereact/column';
import { fetchLibrary } from "../../actions/library";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "react-router-dom";
import Loader from '../Loader/Loader';
import TableDatas from "../TableDatas/TableDatas";

const Library = () => {
    const { state } = useNavigation();
    const data = useSelector((state) => state.libraryReducer.data);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchLibrary());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    
    return (
        <div className="library_container">
            {state === 'loading' && <Loader />}
            {data && data.length !== 0 ? 
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
                            {data.map((dt) => {
                                return (
                                        <tr className="library_table-line">
                                            <TableDatas name={dt.name} playerMin={dt.player_min} playerMax={dt.player_max} type={dt.type_game} age={dt.age} time={dt.time} />
                                            <td><i className="pi pi-pencil"></i></td>
                                            <td><i className="pi pi-trash"></i></td>
                                        </tr>
                                    )
                            })}
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