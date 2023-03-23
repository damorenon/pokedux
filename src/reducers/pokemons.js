import { SET_FAVORITE, SET_LOADING, SET_POKEMONS } from "../actions/types";

const initialState = {
  pokemons: [],
  loading: false,
};

export const pokemonsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_POKEMONS:
      return { ...state, pokemons: payload };
    case SET_FAVORITE:
      const newPokemonsList = [...state.pokemons];
      const currentPokemonIndex = newPokemonsList.findIndex(pokemon => pokemon.id === payload.pokemonId);
      if (currentPokemonIndex < 0) {
        return state;
      }
      newPokemonsList[currentPokemonIndex].favorite = !newPokemonsList[currentPokemonIndex].favorite;
      return { ...state, pokemons: newPokemonsList }
    case SET_LOADING:
      return { ...state, loading: payload };
    default:
      return state;
  }
}