import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../reducers";
import userMiddleware from "../middlewares/user";
import libraryMiddleware from "../middlewares/library";
// import libraryMiddleware from "../middlewares/library";


const store = configureStore({
    reducer: rootReducer,
    devTools: true,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(userMiddleware).concat(libraryMiddleware),
});

export default store;
