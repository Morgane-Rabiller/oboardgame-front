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

export const saveBoardGame = (data) => ({
  type: SAVE_BOARDGAME,
  data
});