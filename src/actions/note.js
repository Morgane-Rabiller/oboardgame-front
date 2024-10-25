export const HAS_NOTE = 'HAS_NOTE';

export const hasNote = () => ({
  type: HAS_NOTE,
});

export const SET_NOTE = 'SET_NOTE';

export const setNote = (note) => ({
  type: SET_NOTE,
  note
});