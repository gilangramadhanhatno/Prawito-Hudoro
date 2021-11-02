import firebase from "../../firebase";

// Sama aja seperti yg dibawah
// export const actionUserName = () => {
//   return (dispatch) => {
//     setTimeout(() => {
//       return dispatch({ type: "CHANGE_USER", value: "Gilang Ramadhan" });
//     }, 2000);
//   };
// };
// Sama aja seperti yg diatas
export const actionUserName = () => (dispatch) => {
  setTimeout(() => {
    return dispatch({ type: "CHANGE_USER", value: "Gilang Ramadhan" });
  }, 2000);
};

export const registerUserAPI = (data) => (dispatch) => {
  dispatch({ type: "CHANGE_LOADING", value: true });
  return firebase
    .auth()
    .createUserWithEmailAndPassword(data.email, data.password)
    .then((res) => {
      console.log("success", res);
      dispatch({ type: "CHANGE_LOADING", value: false });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      dispatch({ type: "CHANGE_LOADING", value: false });
    });
};
