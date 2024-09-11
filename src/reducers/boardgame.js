import { SAVE_BOARDGAME, SAVE_DATA_BOARDGAME } from "../actions/boardgame";

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
      case SAVE_BOARDGAME:
        return {
          ...state,
          data: state.data.push(action.data)
        };
      default:
        return state;
    }
}