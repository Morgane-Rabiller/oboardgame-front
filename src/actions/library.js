export const FETCH_LIBRARY = 'FETCH_LIBRARY';

export const fetchLibrary = () => ({
  type: FETCH_LIBRARY,
});

export const SAVE_DATA = 'SAVE_DATA';

export const saveData = (data) => ({
  type: SAVE_DATA,
  data
});