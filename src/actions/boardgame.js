export const FETCH_BOARDGAMES = 'FETCH_BOARDGAMES';

export const fetchBoardgames = () => ({
  type: FETCH_BOARDGAMES,
});

export const SAVE_DATA_BOARDGAME = 'SAVE_DATA_BOARDGAME';

export const saveDataBoardGame = (data) => ({
  type: SAVE_DATA_BOARDGAME,
  data
});

export const ADD_GENERAL_BOARDGAME = 'ADD_GENERAL_BOARDGAME';

export const addGeneralBoardgame = (data) => ({
  type: ADD_GENERAL_BOARDGAME,
  data
});

export const SAVE_BOARDGAME = 'SAVE_BOARDGAME';

export const saveBoardGame = (data, message) => ({
  type: SAVE_BOARDGAME,
  data,
  message
});

export const FETCH_ERROR_MESSAGE = 'FETCH_ERROR_MESSAGE';

export const fetchErrorMessage = (message) => ({
  type: FETCH_ERROR_MESSAGE,
  message
});

export const ERASE_ERROR_MESSAGE = 'ERASE_ERROR_MESSAGE';

export const eraseErrorMessage = () => ({
  type: ERASE_ERROR_MESSAGE
});

export const ERASE_SUCCESS_MESSAGE_BOARDGAME = 'ERASE_SUCCESS_MESSAGE_BOARDGAME';

export const eraseSuccessMessageBoardgame = () => ({
  type: ERASE_SUCCESS_MESSAGE_BOARDGAME
});
