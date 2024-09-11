export const FETCH_BOARDGAMES = 'FETCH_BOARDGAMES';

export const fetchBoardgames = () => ({
  type: FETCH_BOARDGAMES,
});

export const SAVE_DATA_BOARDGAME = 'SAVE_DATA_BOARDGAME';

export const saveDataBoardGame = (data) => ({
  type: SAVE_DATA_BOARDGAME,
  data
});

export const ADD_BOARDGAME = 'ADD_BOARDGAME';

export const addBoardgame = (data) => ({
  type: ADD_BOARDGAME,
  data
});