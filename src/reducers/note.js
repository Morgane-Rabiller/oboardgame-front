import { ADD_NOTE, DELETE_NOTE, HAS_NOTE, REMOVE_NOTE } from "../actions/note";

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
        case REMOVE_NOTE:
          return {
            ...state,
            hasNote: false
          };
        case ADD_NOTE:
          return {
            ...state,
            note: action.note
          };
        case DELETE_NOTE:
          return {
            ...state,
            note: ""
          };
      default:
        return state;
    }
}