import { fromJS, setIn, getIn, get } from "immutable";
import { SET_FAVORITE, SET_LOADING, SET_POKEMONS } from "../actions/types";

/* const initialState = {
  pokemons: [],
  loading: false,
}; */
const initialState = fromJS({
  pokemons: [],
  loading: false,
});

export const pokemonsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_POKEMONS:
      // return { ...state, pokemons: payload };
      return setIn(state, ['pokemons'], fromJS(payload));
    case SET_FAVORITE:
      /* const newPokemonsList = [...state.pokemons];
      const currentPokemonIndex = newPokemonsList.findIndex(pokemon => pokemon.id === payload.pokemonId);
      if (currentPokemonIndex < 0) { return state; }
      newPokemonsList[currentPokemonIndex].favorite = !newPokemonsList[currentPokemonIndex].favorite;
      return { ...state, pokemons: newPokemonsList } */
      const currentPokemonIndex = get(state, 'pokemons')
        .findIndex(pokemon => get(pokemon, 'id') === payload.pokemonId);
      if (currentPokemonIndex < 0) { return state; }
      const isFavorite = getIn(state, ['pokemons', currentPokemonIndex, 'favorite']);
      return setIn(state, ['pokemons', currentPokemonIndex, 'favorite'], !isFavorite);
    /* case SET_LOADING:
      return { ...state, loading: payload }; */
    case SET_LOADING:
      return setIn(state, ['loading'], payload);
    default:
      return state;
  }
}