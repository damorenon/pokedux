import { fromJS, setIn } from "immutable";
import { SET_LOADING } from "../actions/types";

/* const initialState = {
  pokemons: [],
  loading: false,
}; */
const initialState = fromJS({
  loading: false,
});

export const uiReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_LOADING:
      return setIn(state, ['loading'], payload);
    default:
      return state;
  }
}