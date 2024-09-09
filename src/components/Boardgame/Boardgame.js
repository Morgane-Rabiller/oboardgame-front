import "./Boardgame.scss";
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "react-router-dom";
import Loader from '../Loader/Loader';
import TableDatas from "../TableDatas/TableDatas";
import { fetchBoardgames } from "../../actions/boardgame";
import { addBoardgame, eraseSuccessMessage } from "../../actions/library";
import { Message } from 'primereact/message';
import { Dialog } from 'primereact/dialog';

const Boardgame = () => {
    const { state } = useNavigation();
    const datas = useSelector((state) => state.boardgameReducer.data);
    const successMessage = useSelector((state) => state.libraryReducer.successMessage);
    const dispatch = useDispatch();
    const [showMessage, setShowMessage] = useState(false);
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        dispatch(fetchBoardgames());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (successMessage) {
            setShowMessage(true);
            const timer = setTimeout(() => {
                setShowMessage(false);
                dispatch(eraseSuccessMessage());
            }, 3000); // Cache le message après 3 secondes (3000ms)
            return () => clearTimeout(timer); // Nettoie le timeout si le composant se démonte
        }
        // eslint-disable-next-line
    }, [successMessage]);
    
    return (
        <div className="library_container h-30rem">
            {state === 'loading' && <Loader />}
            {showMessage  && <Message severity="success" text={successMessage} />}
            <div className="text-center">
            <p className="text-sm">Mon jeu n'est pas présent dans la liste ?</p>
            <button type="button" className="" onClick={() => setVisible(true)}>Ajouter un jeu</button>
            </div>
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
                            <th>Ajout</th>
                        </tr>
                    </thead>
                    <tbody className="library_table-tbody">
                            {datas.map((data) => {
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
                    <p className="m-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </Dialog>
        </div>
    );
};

export default React.memo(Boardgame);