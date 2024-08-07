import "./Library.scss";
import React, { useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { fetchLibrary } from "../../actions/library";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "react-router-dom";
import Loader from '../Loader/Loader';

const Library = () => {
    const { state } = useNavigation();
    const data = useSelector((state) => state.libraryReducer.data);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchLibrary());
    }, []);
    
    return (
        <div className="library_container">
            {state === 'loading' && <Loader />}
            {data && data.length !== 0 ? <div className="card">
                <DataTable value={data} tableStyle={{ minWidth: '10rem' }}>
                    <Column field="name" header="Nom"></Column>
                    <Column field="player_min" header="Min-joueur"></Column>
                    <Column field="player_max" header="Max-joueur"></Column>
                    <Column field="type_game" header="Type"></Column>
                    <Column field="age" header="Age"></Column>
                    <Column field="time" header="Durée"></Column>
                </DataTable>
            </div> : <p className="text-center m-5">Tu n'as pas de jeux dans ta bibliothèque</p>
            }
        </div>
    );
};

export default Library;