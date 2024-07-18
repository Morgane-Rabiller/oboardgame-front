import { combineReducers } from "redux";
import userReducer from "./user";
import libraryReducer from "./library";
import boardgameReducer from "./boardgame";

export default combineReducers({
    userReducer,
    libraryReducer,
    boardgameReducer
});