import { combineReducers } from "redux";
import userReducer from "./user";
import libraryReducer from "./library";
import boardgameReducer from "./boardgame";
import noteReducer from "./note";

export default combineReducers({
    userReducer,
    libraryReducer,
    boardgameReducer,
    noteReducer
});