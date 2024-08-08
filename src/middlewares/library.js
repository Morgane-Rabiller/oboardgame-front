import { ADD_BOARDGAME, FETCH_LIBRARY, saveData } from "../actions/library";
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
        case ADD_BOARDGAME:
            axiosInstance.post("/library/addBoardgame", { name: action.name})
            .then((response) => {
                console.log('Boardgame ajouté à la bibliothèque:', response.data);
            })
            .catch((error) => {
                console.error('Erreur lors de l\'ajout du jeu de société:', error);
            });
        default: 
            next(action);
            break;
    }
}

export default libraryMiddleware;