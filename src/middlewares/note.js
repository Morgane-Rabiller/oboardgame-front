import { addNote, deleteNote, GET_NOTE, hasNote, JOIN_NOTE, REMOVE_NOTE } from "../actions/note";
import axiosInstance from "./axiosInstance";


const noteMiddleware = (store) => (next) => (action) => {
    switch (action.type) {
        case JOIN_NOTE:
            console.log("action.note", action.note);
            
            axiosInstance.put(`/note/add/${action.noteId}`, {note :action.note}).then((res) => {
                store.dispatch(hasNote(action.noteId));
                store.dispatch(addNote(action.note, action.noteId));
            }).catch((err) => {
                console.log(err);
            });
            next(action);
            break;
        case GET_NOTE:
            axiosInstance.get(`/note/${action.noteId}`).then((res) => {
                if(res.data.note) {
                    store.dispatch(hasNote(action.noteId));
                    store.dispatch(addNote(res.data.note, action.noteId));
                }
            }).catch((err) => {
                console.log(err);
            });
            next(action);
            break;
        case REMOVE_NOTE:
            axiosInstance.put(`/note/delete/${action.noteId}`).then((res) => {
                store.dispatch(deleteNote(action.noteId));
            }).catch((err) => {
                console.log(err);
            });
            next(action);
            break;
        default: 
            next(action);
            break;
    }
}

export default noteMiddleware;