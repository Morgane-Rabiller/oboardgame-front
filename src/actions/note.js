export const HAS_NOTE = 'HAS_NOTE';

export const hasNote = () => ({
  type: HAS_NOTE,
});

export const REMOVE_NOTE = 'REMOVE_NOTE';

export const removeNote = () => ({
  type: REMOVE_NOTE,
});

export const ADD_NOTE = 'ADD_NOTE';

export const addNote = (note) => ({
  type: ADD_NOTE,
  note
});

export const UPDATE_NOTE = 'UPDATE_NOTE';

export const updateNote = (note) => ({
  type: UPDATE_NOTE,
  note
});

export const DELETE_NOTE = 'DELETE_NOTE';

export const deleteNote = () => ({
  type: DELETE_NOTE
});