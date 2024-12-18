export const SET_USER_FIELD = 'SET_USER_FIELD';

export const setUserField = (value, field) => ({
  type: SET_USER_FIELD,
  value,
  field,
});

export const REGISTER = 'REGISTER';

export const register = () => ({
  type: REGISTER,
});

export const LOGIN = 'LOGIN';

export const login = () => ({
  type: LOGIN,
});

export const LOGOUT = 'LOGOUT';

export const logout = () => ({
  type: LOGOUT,
});

export const SAVE_PSEUDO = 'SAVE_PSEUDO';

export const savePseudo = (pseudo, email) => ({
  type: SAVE_PSEUDO,
  pseudo,
  email
});

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

export const loginSuccess = (check) => ({
  type: LOGIN_SUCCESS,
  check
});

export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';

export const registerSuccess = (message) => ({
  type: REGISTER_SUCCESS,
  message
});

export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  error
});

export const UPDATE_PASSWORD = 'UPDATE_PASSWORD';

export const updatePassword = (data) => ({
  type: UPDATE_PASSWORD,
  data
});

export const UPDATE_FAILURE = 'UPDATE_FAILURE';

export const updateFailure = (message) => ({
  type: UPDATE_FAILURE,
  message
});

export const UPDATE_SUCCESS = 'UPDATE_SUCCESS';

export const updateSuccess = (message) => ({
  type: UPDATE_SUCCESS,
  message
});

export const ERASE_MESSAGE = 'ERASE_MESSAGE';

export const eraseMessage = () => ({
  type: ERASE_MESSAGE,
});

export const DELETE_ACCOUNT = 'DELETE_ACCOUNT';

export const deleteAccount = () => ({
  type: DELETE_ACCOUNT
});

export const FORGOT_PASSWORD = 'FORGOT_PASSWORD';

export const forgotPassword = (email) => ({
  type: FORGOT_PASSWORD,
  email
});

export const SEND_EMAIL_SUCCESS = 'SEND_EMAIL_SUCCESS';

export const sendEmailSuccess = (message) => ({
  type: SEND_EMAIL_SUCCESS,
  message
});

export const SEND_EMAIL_FAILURE = 'SEND_EMAIL_FAILURE';

export const sendEmailFailure = (error) => ({
  type: SEND_EMAIL_FAILURE,
  error
});

export const SEND_PASSWORD_SUCCESS = 'SEND_PASSWORD_SUCCESS';

export const sendPasswordSuccess = (message) => ({
  type: SEND_PASSWORD_SUCCESS,
  message
});

export const SEND_PASSWORD_FAILURE = 'SEND_PASSWORD_FAILURE';

export const sendPasswordFailure = (error) => ({
  type: SEND_PASSWORD_FAILURE,
  error
});

export const NEW_PASSWORD_AFTER_FORGOT = 'NEW_PASSWORD_AFTER_FORGOT'; 

export const newPasswordIfForgot = (token, password, passwordRepeat) => ({
  type: NEW_PASSWORD_AFTER_FORGOT,
  token,
  password,
  passwordRepeat
});

export const VALIDATE_ACCOUNT = 'VALIDATE_ACCOUNT';

export const validateAccount = () => ({
  type: VALIDATE_ACCOUNT,
});

export const ACCOUNT_VALIDATED = 'ACCOUNT_VALIDATED';

export const accountValidated = () => ({
  type: ACCOUNT_VALIDATED,
});

export const FETCH_USER = 'FETCH_USER';

export const fetchUser = () => ({
  type: FETCH_USER,
});

