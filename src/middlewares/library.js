import { ADD_BOARDGAME, addBoardgameSuccess, addErrorMessage, DELETE_BOARDGAME, eraseBoardgameLine, FETCH_LIBRARY, saveData, saveDataAfterUpdate, saveMessage, UPDATE_LIBRARY_LINE } from "../actions/library";
import axiosInstance from "./axiosInstance";


const libraryMiddleware = (store) => (next) => (action) => {
    switch (action.type) {
        case FETCH_LIBRARY: 
            axiosInstance.get("/library").then((res) => {
                store.dispatch(saveData(res.data.data));
            }).catch((err) => {
                console.log(err);    
            });
            next(action);
            break;
        case FETCH_LIBRARY: 
            axiosInstance.get("/library/random").then((res) => {
                store.dispatch(saveMessage(res.data.message, res.data.boardgameName));
            }).catch((err) => {
                console.log(err);    
            });
            next(action);
            break;
        case ADD_BOARDGAME:
            axiosInstance.post("/library/addBoardgame", { name: action.name})
            .then((response) => {
                console.log('Boardgame ajouté à la bibliothèque:', response.data);
                store.dispatch(addBoardgameSuccess(response.data.message));
            })
            .catch((error) => {
                console.error('Erreur lors de l\'ajout du jeu de société:', error);
                store.dispatch(addErrorMessage(error.response.data.message));
            });
            next(action);
            break;
        case UPDATE_LIBRARY_LINE:
            axiosInstance.put(`/library/update/${action.data.boardgame_id}`, action.data)
            .then((response) => {
                console.log('Boardgame modifié:', response.data);
                store.dispatch(saveDataAfterUpdate(action.data));
            })
            .catch((error) => {
                console.error('Erreur lors de l\'ajout du jeu de société:', error);
                store.dispatch(addErrorMessage(error.response.data.message));
            });
            next(action);
            break;
        case DELETE_BOARDGAME:
            axiosInstance.delete(`/library/delete/${action.id}`)
            .then((response) => {
                console.log(response.data);
                store.dispatch(eraseBoardgameLine(action.id));
            })
            .catch((error) => {
                console.log(error);
            })
            next(action);
            break;
        default: 
            next(action);
            break;
    }
}

export default libraryMiddleware;