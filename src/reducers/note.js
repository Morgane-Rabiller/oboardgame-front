import { ADD_NOTE, HAS_NOTE } from "../actions/note";

const initialState = {
    note: "",
    hasNote: false,
};

export default function noteReducer(state = initialState, action) {
    switch (action.type) {
        case HAS_NOTE:
          return {
            ...state,
            hasNote: true
          };
        case ADD_NOTE:
          return {
            ...state,
            note: action.note
          };
      default:
        return state;
    }
}