import { SAVE_DATA } from "../actions/library";

const initialState = {
    data: null
};

export default function libraryReducer(state = initialState, action) {
    switch (action.type) {
      case SAVE_DATA:
        return {
          ...state,
          data: action.data
        };
        break;
      default:
        return state;
    }
}