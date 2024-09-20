import { LOGIN, savePseudo, loginSuccess, loginFailure, LOGOUT, REGISTER, registerSuccess, UPDATE_PASSWORD, updateSuccess, updateFailure } from "../actions/user";
import axiosInstance from "./axiosInstance";

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
            case UPDATE_PASSWORD:
                axiosInstance.put("/updatePassword", action.data).then((res) => {
                    console.log("Mot de passe mis à jour !", res.data.message);
                    store.dispatch(updateSuccess(res.data.message));
                }).catch((err) => {
                    console.log("Erreur lors de la mise à jour du mot de passe :",err.response.data.message);
                    store.dispatch(updateFailure(err.response.data.message));
                });
            next(action);
            break;
        default: 
            next(action);
            break;
    }
}

export default userMiddleware;