import { combineReducers } from "redux";
import userReducer from "./user";
import libraryReducer from "./library";
import boardgameReducer from "./boardgame";
import noteReducer from "./note";
import contactReducer from "./contact";

export default combineReducers({
    userReducer,
    libraryReducer,
    boardgameReducer,
    noteReducer,
    contactReducer
});