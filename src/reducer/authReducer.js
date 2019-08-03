import { ADD_COUNTER, LOGIN_USER } from "./../actions/type";

const initialState = {
  user: {},
  isAuthenticated: false,
  counter: 0
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_COUNTER:
      return {
        ...state,
        counter: 1
      };
    case LOGIN_USER:
      return {
        ...state,
        user: action.payload
      };
    default:
      return state;
  }
}
