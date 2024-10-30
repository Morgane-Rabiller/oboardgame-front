import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../reducers";
import userMiddleware from "../middlewares/user";
import libraryMiddleware from "../middlewares/library";
import boardgameMiddleware from "../middlewares/boardgame";
import noteMiddleware from "../middlewares/note";


const store = configureStore({
    reducer: rootReducer,
    devTools: true,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(userMiddleware).concat(libraryMiddleware).concat(boardgameMiddleware).concat(noteMiddleware),
});

export default store;
