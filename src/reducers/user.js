import { SAVE_PSEUDO, SET_USER_FIELD } from "../actions/user";

const initialState = {
        logged: false,
        email: '',
        pseudo: '',
        password: '',
        passwordRepeat: ''
};

export default function userReducer(state = initialState, action) {
    switch (action.type) {
      case SET_USER_FIELD:
        return {
          ...state,
          [action.field]: action.value
        };
      case SAVE_PSEUDO:
        return {
          ...state,
          pseudo: action.pseudo,
          logged: true
        }
      default:
        return state;
    }
}
