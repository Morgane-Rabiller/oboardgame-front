import { ADD_BOARDGAME_SUCCESS, ERASE_SUCCESS_MESSAGE, SAVE_DATA } from "../actions/library";

const initialState = {
    data: null,
    successMessage: null
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
      default:
        return state;
    }
}