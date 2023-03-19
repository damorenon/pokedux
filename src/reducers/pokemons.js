import { SET_POKEMONS } from "../actions/types";

const initialState = {
  pokemons: []
};

export const pokemonsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_POKEMONS:
      return {
        ...state,
        pokemons: payload,
      }
    default:
      return state
  }
}