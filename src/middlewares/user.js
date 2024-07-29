import axios from "axios";
import { LOGIN } from "../actions/user";

const userMiddleware = (store) => (next) => (action) => {
    switch (action.type) {
        case LOGIN: {
            const { email, password } = store.getState().userReducer;
        console.log(email, password);
        axios.post("http://localhost:8080/login", {email, password}).then((res) => {
                  console.log(res);
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