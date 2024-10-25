export const HAS_NOTE = 'HAS_NOTE';

export const hasNote = () => ({
  type: HAS_NOTE,
});

export const ADD_NOTE = 'ADD_NOTE';

export const addNote = (note) => ({
  type: ADD_NOTE,
  note
});