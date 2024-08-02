export const SET_USER_FIELD = 'SET_USER_FIELD';

export const setUserField = (value, field) => ({
  type: SET_USER_FIELD,
  value,
  field,
});

export const LOGIN = 'LOGIN';

export const login = () => ({
  type: LOGIN,
});

export const SAVE_PSEUDO = 'SAVE_PSEUDO';

export const savePseudo = (pseudo) => ({
  type: SAVE_PSEUDO,
  pseudo
});

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

export const loginSuccess = () => ({
  type: LOGIN_SUCCESS,
});

export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  error
});

