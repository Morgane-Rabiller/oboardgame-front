import "./Boardgame.scss";
import React, { useEffect } from 'react';
import { fetchLibrary } from "../../actions/library";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "react-router-dom";
import Loader from '../Loader/Loader';
import TableDatas from "../TableDatas/TableDatas";

const Boardgame = () => {
    const { state } = useNavigation();
    const datas = useSelector((state) => state.libraryReducer.data);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchLibrary());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    
    return (
        <div className="library_container">
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
                                        <tr className="library_table-line">
                                            <TableDatas name={data.name} playerMin={data.player_min} playerMax={data.player_max} type={data.type_game} age={data.age} time={data.time} />
                                            <td><i className="pi pi-pencil"></i></td>
                                            <td><i className="pi pi-trash"></i></td>
                                        </tr>
                                    )
                            })}
                    </tbody>
                </table>
            </div> 
            : 
            <p className="text-center m-5">Pas de jeux de société dans la base de données.</p>
            }
        </div>
    );
};

export default Boardgame;