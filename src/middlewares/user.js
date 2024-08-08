import axios from "axios";
import { LOGIN, savePseudo, loginSuccess, loginFailure, LOGOUT, REGISTER, registerSuccess } from "../actions/user";
import { FETCH_LIBRARY, saveData } from "../actions/library";
import { FETCH_BOARDGAMES, saveDataBoardGame } from "../actions/boardgame";

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8080',
  });

const userMiddleware = (store) => (next) => (action) => {
    switch (action.type) {
        case LOGIN: {
            const { email, password } = store.getState().userReducer;

            axiosInstance.post("/login", {email, password}).then((res) => {
                const { pseudo } = res.data.user;
                axiosInstance.defaults.headers.common.Authorization = `Bearer ${res.data.token}`;
                store.dispatch(savePseudo(pseudo));
                store.dispatch(loginSuccess());
            }).catch((err) => {
                console.error(err);
                const error = err.response.data.message;
                store.dispatch(loginFailure(error));
                });
            }
            
            next(action);
            break;
        case LOGOUT:
            axiosInstance.defaults.headers.common.Authorization = null;
            next(action);
            break;
        case REGISTER:
            const { pseudo, email, password, passwordRepeat } = store.getState().userReducer;

            axiosInstance.post("/registerUser", { pseudo, email, password, passwordRepeat }).then((res) => {
                store.dispatch(registerSuccess(res.data.message));
                console.log(res);
            }).catch((err) => {
                console.log(err);
                
                const error = err.response.data.message;
                store.dispatch(loginFailure(error));
            });
            next(action);
            break;
            case FETCH_LIBRARY:
                axiosInstance.get("/library").then((res) => {
                    console.log(res.data.data);
                    store.dispatch(saveData(res.data.data));
                }).catch((err) => {
                    console.log(err);    
                });
            
            next(action);
            break;
            case FETCH_BOARDGAMES:
                axiosInstance.get("/boardgame").then((res) => {
                    console.log(res.data.data);
                    store.dispatch(saveDataBoardGame(res.data.data));
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

export default userMiddleware;