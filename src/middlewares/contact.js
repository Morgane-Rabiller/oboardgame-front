import { SEND_MAIL, sendMailError, sendMailSuccess } from "../actions/contact";
import axiosInstance from "./axiosInstance";


const contactMiddleware = (store) => (next) => (action) => {
    switch (action.type) {
        case SEND_MAIL:
            axiosInstance.post("/contactAdmin", { email : action.email, object : action.object, message : action.message}).then((res) => {
                store.dispatch(sendMailSuccess(res.data.message));
                
            }).catch((err) => {
                store.dispatch(sendMailError(err.response.data.message));
            })
            next(action);
            break;
        default: 
            next(action);
            break;
    }
}

export default contactMiddleware;