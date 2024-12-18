export const HAS_NOTE = 'HAS_NOTE';

export const hasNote = (noteId) => ({
  type: HAS_NOTE,
  noteId
});

export const GET_NOTE = 'GET_NOTE';

export const getNote = (noteId) => ({
  type: GET_NOTE,
  noteId
});

export const REMOVE_NOTE = 'REMOVE_NOTE';

export const removeNote = (noteId) => ({
  type: REMOVE_NOTE,
  noteId
});

export const JOIN_NOTE = 'JOIN_NOTE';

export const joinNote = (note, noteId) => ({
  type: JOIN_NOTE,
  note,
  noteId
});

export const ADD_NOTE = 'ADD_NOTE';

export const addNote = (note, noteId) => ({
  type: ADD_NOTE,
  note,
  noteId
});

export const UPDATE_NOTE = 'UPDATE_NOTE';

export const updateNote = (note) => ({
  type: UPDATE_NOTE,
  note
});

export const DELETE_NOTE = 'DELETE_NOTE';

export const deleteNote = (noteId) => ({
  type: DELETE_NOTE,
  noteId
});