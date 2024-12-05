import { SEND_MAIL_MESSAGE } from "../actions/contact";

const initialState = {
    message: {},
};

export default function contactReducer(state = initialState, action) {
    switch (action.type) {
        case SEND_MAIL_MESSAGE:
            return {
                ...state,
                message : action.message
            };
        default:
            return state;
    }
}