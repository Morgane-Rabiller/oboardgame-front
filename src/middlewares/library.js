import { FETCH_LIBRARY, saveData } from "../actions/library";
import axiosInstance from "./axiosInstance";


const libraryMiddleware = (store) => (next) => (action) => {
    switch (action.type) {
        case FETCH_LIBRARY: 
        axiosInstance.get("/library").then((res) => {
            console.log(res.data.data);
            store.dispatch(saveData(res.data.data));
        }).catch((err) => {
            console.log(err);    
        });
    
    next(action);
    
    next(action);
    break;
        default: 
            next(action);
            break;
    }
}

export default libraryMiddleware;