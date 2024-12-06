import { ERASE_MESSAGES, SEND_MAIL_ERROR, SEND_MAIL_SUCCESS } from "../actions/contact";

const initialState = {
    success: null,
    error: null,
};

export default function contactReducer(state = initialState, action) {
    switch (action.type) {
        case SEND_MAIL_SUCCESS:
            return {
                ...state,
                success : action.success
            };
        case SEND_MAIL_ERROR:
            return {
                ...state,
                error : action.error
            };
        case ERASE_MESSAGES:
            return {
                ...state,
                success: null,
                error: null,
            };
        default:
            return state;
    }
}