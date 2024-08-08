export const FETCH_LIBRARY = 'FETCH_LIBRARY';

export const fetchLibrary = () => ({
  type: FETCH_LIBRARY,
});

export const SAVE_DATA = 'SAVE_DATA';

export const saveData = (data) => ({
  type: SAVE_DATA,
  data
});

export const ADD_BOARDGAME = 'ADD_BOARDGAME';

export const addBoardgame = (name) => ({
  type: ADD_BOARDGAME,
  name
});

