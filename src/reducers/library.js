import { ADD_BOARDGAME_SUCCESS, ADD_ERROR_MESSAGE, ERASE_BOARDGAME_LINE, ERASE_ERROR_MESSAGE, ERASE_SUCCESS_MESSAGE, SAVE_DATA, SAVE_DATA_AFTER_UPDATE } from "../actions/library";

const initialState = {
    data: null,
    successMessage: null,
    errorMessage: null
};

export default function libraryReducer(state = initialState, action) {
    switch (action.type) {
      case SAVE_DATA:
        return {
          ...state,
          data: action.data
        };
      case ADD_BOARDGAME_SUCCESS: 
        return {
          ...state,
          successMessage: action.message
        }
      case ERASE_SUCCESS_MESSAGE: 
        return {
          ...state,
          successMessage: null
        }
        case ADD_ERROR_MESSAGE:
          return {
            ...state,
            errorMessage: action.message
          }
        case ERASE_ERROR_MESSAGE: 
          return {
            ...state,
            errorMessage: null
          }
      case ERASE_BOARDGAME_LINE: 
        return {
          ...state,
          data : state.data.filter(boardgame => boardgame.boardgame_id !== action.id),
          successMessage: null
        }
      case SAVE_DATA_AFTER_UPDATE:
        return {
          ...state,
          data: state.data.map(item => item.boardgame_id === action.data.boardgame_id ? action.data : item)
        }
      default:
        return state;
    }
}