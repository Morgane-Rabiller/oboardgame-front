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

