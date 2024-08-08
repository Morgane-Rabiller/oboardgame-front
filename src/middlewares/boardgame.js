import { FETCH_BOARDGAMES, saveDataBoardGame } from "../actions/boardgame";
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
    break;
        default: 
            next(action);
            break;
    }
}

export default boardgameMiddleware;