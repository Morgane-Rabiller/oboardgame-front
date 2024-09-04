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

export const ADD_BOARDGAME_SUCCESS = 'ADD_BOARDGAME_SUCCESS';

export const addBoardgameSuccess = (message) => ({
  type: ADD_BOARDGAME_SUCCESS,
  message
});

export const ERASE_SUCCESS_MESSAGE = 'ERASE_SUCCESS_MESSAGE';

export const eraseSuccessMessage = () => ({
  type: ERASE_SUCCESS_MESSAGE,
});

export const DELETE_BOARDGAME = 'DELETE_BOARDGAME';

export const deleteBoardgame = (id) => ({
  type: DELETE_BOARDGAME,
  id
});

export const ERASE_BOARDGAME_LINE = 'ERASE_BOARDGAME_LINE';

export const eraseBoardgameLine = (id) => ({
  type: ERASE_BOARDGAME_LINE,
  id
});

export const SAVE_DATA_AFTER_UPDATE = 'SAVE_DATA_AFTER_UPDATE';

export const saveDataAfterUpdate = (data) => ({
  type: SAVE_DATA_AFTER_UPDATE,
  data
});

export const UPDATE_LIBRARY_LINE = 'UPDATE_LIBRARY_LINE';

export const updateLibraryLine = (data) => ({
  type: UPDATE_LIBRARY_LINE,
  data
});