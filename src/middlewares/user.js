import { LOGIN, savePseudo, loginSuccess, loginFailure, LOGOUT, REGISTER, registerSuccess, UPDATE_PASSWORD, updateSuccess, updateFailure, DELETE_ACCOUNT, logout, FORGOT_PASSWORD, sendEmailSuccess, sendEmailFailure, NEW_PASSWORD_AFTER_FORGOT, sendPasswordSuccess, sendPasswordFailure, VALIDATE_ACCOUNT, accountValidated } from "../actions/user";
import axiosInstance from "./axiosInstance";

const userMiddleware = (store) => (next) => (action) => {
    switch (action.type) {
        case LOGIN: {
            const { email, password } = store.getState().userReducer;

            axiosInstance.post("/login", {email, password}).then((res) => {
                const { pseudo } = res.data.user;
                const { check } = res.data.user;
                
                axiosInstance.defaults.headers.common.Authorization = `Bearer ${res.data.token}`;
                store.dispatch(savePseudo(pseudo));
                store.dispatch(loginSuccess(check));
            }).catch((err) => {
                console.error(err);
                const error = err.response.data.message;
                store.dispatch(loginFailure(error));
                });
            }
            next(action);
            break;
            // eslint-disable-next-line
        case FORGOT_PASSWORD: {
            axiosInstance.post("/forgotPassword", {email: action.email}).then((res) => {
                store.dispatch(sendEmailSuccess(res.data.message));
            }).catch((err) => {
                console.error(err);
                const error = err.response.data.message;
                store.dispatch(sendEmailFailure(error));
                });
            }
            next(action);
            break;
            // eslint-disable-next-line
        case NEW_PASSWORD_AFTER_FORGOT: {
            axiosInstance.put(`/updatePassword/${action.token}`, {password: action.password, passwordRepeat: action.passwordRepeat}).then((res) => {
                store.dispatch(sendPasswordSuccess(res.data.message));
            }).catch((err) => {
                console.error(err);
                const error = err.response.data.message;
                store.dispatch(sendPasswordFailure(error));
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
            }).catch((err) => {
                console.log(err);
                const error = err.response.data.message;
                store.dispatch(loginFailure(error));
            });
            next(action);
            break;
            case UPDATE_PASSWORD:
                axiosInstance.put("/updatePassword", action.data).then((res) => {
                    store.dispatch(updateSuccess(res.data.message));
                }).catch((err) => {
                    console.log("Erreur lors de la mise à jour du mot de passe :",err.response.data.message);
                    store.dispatch(updateFailure(err.response.data.message));
                });
            next(action);
            break;
        case DELETE_ACCOUNT:
            axiosInstance.delete("/deleteAccount").then((res) => {
                store.dispatch(logout());
            }).catch((err) => {
                console.log("Erreur lors de la suppression du compte :",err.response.data.message);
            });;
            next(action);
            break;
        case VALIDATE_ACCOUNT:
            axiosInstance.delete("/validateAccount").then((res) => {
                store.dispatch(accountValidated());
            }).catch((err) => {
                console.log("Erreur lors de la validation du compte",err.response.data.message);
            });;
            next(action);
            break;
        default: 
            next(action);
            break;
    }
}

export default userMiddleware;