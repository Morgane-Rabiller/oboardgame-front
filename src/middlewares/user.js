import axios from "axios";
import { LOGIN, savePseudo } from "../actions/user";

const userMiddleware = (store) => (next) => (action) => {
    switch (action.type) {
        case LOGIN: {
            const { email, password } = store.getState().userReducer;

            axios.post("http://localhost:8080/login", {email, password}).then((res) => {
                const { pseudo } = res.data.user;
                store.dispatch(savePseudo(pseudo));
                }).catch((err) => {
                    console.error(err);
                });
            }
            
            break;
    
        default: next(action);
            break;
    }
}

export default userMiddleware;