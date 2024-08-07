import { SAVE_PSEUDO, SET_USER_FIELD, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT, REGISTER_SUCCESS } from "../actions/user";

const initialState = {
        logged: false,
        email: '',
        pseudo: '',
        password: '',
        passwordRepeat: '',
        error: null,
        message: null
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
        };
      case REGISTER_SUCCESS:
        return {
          logged: false,
          email: '',
          pseudo: '',
          password: '',
          passwordRepeat: '',
          error: null,
          message: action.message
        }
      case LOGIN_SUCCESS:
        return {
          ...state,
          logged: true,
          error: null
        }
      case LOGIN_FAILURE:
        return {
          ...state,
          logged: false,
          error: action.error
        }
      case LOGOUT: 
        return {
          logged: false,
          email: '',
          pseudo: '',
          password: '',
          passwordRepeat: '',
          error: null,
        }
      default:
        return state;
    }
}
