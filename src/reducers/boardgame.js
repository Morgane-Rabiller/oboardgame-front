import { ERASE_ERROR_MESSAGE, FETCH_ERROR_MESSAGE, SAVE_BOARDGAME, SAVE_DATA_BOARDGAME } from "../actions/boardgame";

const initialState = {
    data: null,
    errorMessage: null
};

export default function boardgameReducer(state = initialState, action) {
    switch (action.type) {
      case SAVE_DATA_BOARDGAME:
        return {
          ...state,
          data: action.data
        };
      case SAVE_BOARDGAME:
        return {
          ...state,
          data: [...state.data, action.data]
        };
      case FETCH_ERROR_MESSAGE:
        return {
          ...state,
          errorMessage: action.message
        }
      case ERASE_ERROR_MESSAGE:
        return {
          ...state,
          errorMessage: null
        }
      default:
        return state;
    }
}