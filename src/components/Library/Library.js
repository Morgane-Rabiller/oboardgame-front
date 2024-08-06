import "./Library.scss";
import React, { useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { fetchLibrary } from "../../actions/library";
import { useDispatch, useSelector } from "react-redux";

const Library = () => {
    const data = useSelector((state) => state.libraryReducer.data);
    
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(fetchLibrary());
        window.setTimeout(() => {
            console.log(data);
        }, 3000);
    }, []);
    return (
        <div className="library_container">
            <div className="card">
                <DataTable value={data} tableStyle={{ minWidth: '10rem' }}>
                    {/* <Column field="name" header="Nom"></Column> */}
                    <Column field="players" header="Joueurs"></Column>
                    <Column field="type_game" header="Type"></Column>
                    <Column field="age" header="Age"></Column>
                    <Column field="time" header="Durée"></Column>
                </DataTable>
            </div>
        </div>
    );
};

export default Library;