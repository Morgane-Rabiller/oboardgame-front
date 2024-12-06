import { SEND_MAIL, sendMailSuccess } from "../actions/contact";
import axiosInstance from "./axiosInstance";


const contactMiddleware = (store) => (next) => (action) => {
    switch (action.type) {
        case SEND_MAIL:
            axiosInstance.post("/contactAdmin", { email : action.email, object : action.object, message : action.message}).then((res) => {
                store.dispatch(sendMailSuccess(res.data.message));
                console.log(res);
                
            }).catch((err) => {
                store.dispatch(sendMailSuccess(err.response.data.message));
                console.log(err);
            })
            next(action);
            break;
        default: 
            next(action);
            break;
    }
}

export default contactMiddleware;