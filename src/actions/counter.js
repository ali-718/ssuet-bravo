import { ADD_COUNTER } from "./type";

export const AddCounter = () => dispatch => {
  dispatch({
    type: ADD_COUNTER
  });
};
