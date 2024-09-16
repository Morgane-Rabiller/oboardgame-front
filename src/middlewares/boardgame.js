import { ADD_GENERAL_BOARDGAME, FETCH_BOARDGAMES, fetchErrorMessage, saveBoardGame, saveDataBoardGame } from "../actions/boardgame";
import axiosInstance from "./axiosInstance";


const boardgameMiddleware = (store) => (next) => (action) => {
    switch (action.type) {
        case FETCH_BOARDGAMES:
            axiosInstance.get("/boardgame").then((res) => {
                store.dispatch(saveDataBoardGame(res.data.data));
            }).catch((err) => {
                console.log(err);    
            });
        next(action);
        break;
    case ADD_GENERAL_BOARDGAME:
        console.log("action", action.data);
        
        axiosInstance.post("/boardgame/create", action.data).then((response) => {
            console.log("response.data.newBoardgame", response.data.newBoardgame);
            console.log("response.data.message", response.data.message);
            store.dispatch(saveBoardGame(response.data.newBoardgame, response.data.message));
        }).catch((err) => {
            console.log(err);
            store.dispatch(fetchErrorMessage(err.response.data.message));
        });
        
        next(action);
        break;
        default: 
            next(action);
            break;
    }
}

export default boardgameMiddleware;