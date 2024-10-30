import { addNote, hasNote, JOIN_NOTE } from "../actions/note";
import axiosInstance from "./axiosInstance";


const noteMiddleware = (store) => (next) => (action) => {
    switch (action.type) {
        case JOIN_NOTE:
            console.log("action.note", action.note);
            
            axiosInstance.put(`/note/add/${action.noteId}`, {note :action.note}).then((res) => {
                console.log(res);
                store.dispatch(hasNote(action.noteId));
                store.dispatch(addNote(action.note, action.noteId));
            }).catch((err) => {
                console.log(err);
                // const error = err.response.data.message;
                // if(error === "Pas d'autorisation token") {
                //     store.dispatch(logout());
                // }
            });
            next(action);
            break;
        default: 
            next(action);
            break;
    }
}

export default noteMiddleware;