import { SAVE_PSEUDO, SET_USER_FIELD, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT, REGISTER_SUCCESS, UPDATE_FAILURE, ERASE_MESSAGE, UPDATE_SUCCESS, SEND_EMAIL_FAILURE, SEND_EMAIL_SUCCESS, SEND_PASSWORD_FAILURE, SEND_PASSWORD_SUCCESS, ACCOUNT_VALIDATED } from "../actions/user";

const initialState = {
        logged: false,
        email: '',
        pseudo: '',
        password: '',
        passwordRepeat: '',
        error: null,
        message: null,
        check: false
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
          error: null,
          check: action.check
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
          check: false
        }
      case UPDATE_FAILURE:
        return {
          ...state,
          error: action.message
        }
      case UPDATE_SUCCESS:
        return {
          ...state,
          message: action.message
        }
      case ERASE_MESSAGE:
        return {
          ...state,
          error: null,
          message: null
        }
      case SEND_EMAIL_FAILURE:
        return {
          ...state,
          error: action.error
        }
      case SEND_EMAIL_SUCCESS:
        return {
          ...state,
          message: action.message
        }
      case SEND_PASSWORD_FAILURE:
        return {
          ...state,
          error: action.error
        }
      case SEND_PASSWORD_SUCCESS:
        return {
          ...state,
          message: action.message
        }
      case ACCOUNT_VALIDATED:
        return {
          ...state,
          check: true
        }
      default:
        return state;
    }
}
