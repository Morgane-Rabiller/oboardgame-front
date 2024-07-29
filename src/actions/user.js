export const SET_USER_FIELD = 'SET_USER_FIELD';

export const setUserField = (value, field) => ({
  type: SET_USER_FIELD,
  value,
  field,
});
export const LOGIN = 'LOGIN';

// ACTION CREATOR login
export const login = () => ({
  type: LOGIN,
});

// export const login = (data) => {
//   return (dispatch) => {
//     return axios.post("http://localhost:8080/login", data).then((res) => {
//       dispatch({ type: LOGIN, payload: data })
//     })
//   }
// }