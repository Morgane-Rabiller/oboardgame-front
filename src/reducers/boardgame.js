import { SAVE_DATA_BOARDGAME } from "../actions/boardgame";

const initialState = {
    data: null
};

export default function boardgameReducer(state = initialState, action) {
    switch (action.type) {
      case SAVE_DATA_BOARDGAME:
        return {
          ...state,
          data: action.data
        };
        break;
      default:
        return state;
    }
}