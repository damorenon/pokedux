import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getPokemon, getPokemonDetails } from "../api";
import { setLoading } from "./uiSlice";

// Toolkit maneja la inmutabilidad por debajo (immer.js)
const initialState = {
  pokemons: []
}

export const fetchPokemonWithDetails = createAsyncThunk(
  'data/fetchPokemonWithDetails',
  async (_, { dispatch }) => {
    dispatch(setLoading(true));
    const pokemonRes = await getPokemon();
    const pokemonsDetailed = await Promise.all(
      pokemonRes.map(pokemon => getPokemonDetails(pokemon))
    );
    dispatch(setPokemons(pokemonsDetailed));
    dispatch(setLoading(false));
  }
)

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setPokemons: (state, action) => {
      state.pokemons = action.payload;
    },
    setFavorite: (state, action) => {
      const currentPokemonIndex = state.pokemons
        .findIndex(pokemon => pokemon.id === action.payload.pokemonId);
      if (currentPokemonIndex >= 0) {
        const isFavorite = state.pokemons[currentPokemonIndex].favorite;
        state.pokemons[currentPokemonIndex].favorite = !isFavorite;
      }
    }
  },
});

export const { setFavorite, setPokemons } = dataSlice.actions;

export default dataSlice.reducer;