import { combineReducers } from "redux";

//TODO dummy values
export default combineReducers({
  movies: (movieState = {}, action) => {
    return movieState;
  },
  initialState: (movieState = {}, action) => {
    return movieState;
  },
});
