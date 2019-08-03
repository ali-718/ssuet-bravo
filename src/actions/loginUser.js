import { LOGIN_USER } from "./type";

export const LoginUser = (Email, Password, history) => dispatch => {
  dispatch({
    type: LOGIN_USER,
    payload: { Email, Password }
  });

  localStorage.setItem("Email", Email);
  localStorage.setItem("Password", Password);

  history.push("/about/name");
};

// const array = [1, 2, 3, 4];
// let name = "ali haider";

// name[0] = "m";

// const name = (Name = "Anonymous") => {
//   var Name = "ali";
// };
