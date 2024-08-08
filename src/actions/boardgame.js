export const FETCH_BOARDGAMES = 'FETCH_BOARDGAMES';

export const fetchBoardgames = () => ({
  type: FETCH_BOARDGAMES,
});

export const SAVE_DATA_BOARDGAME = 'SAVE_DATA_BOARDGAME';

export const saveDataBoardGame = (data) => ({
  type: SAVE_DATA_BOARDGAME,
  data
});