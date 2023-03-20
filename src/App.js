import { useEffect } from 'react';
import { Col } from 'antd';
import PokemonList from './components/PokemonList';
import Searcher from './components/Searcher';
import { getPokemon, getPokemonDetails } from './api';
import { setPokemons } from './actions';
import logo from './statics/logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';

// OLD REDUX WAY
/* function App({ pokemons, setPokemons }) {
  useEffect(() => {
    const fetchPokemons = async () => {
      const pokemonRes = await getPokemon();
      setPokemons(pokemonRes);
    }
    fetchPokemons();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <Col span={4} offset={10} >
        <img src={logo} alt="Pokedux" />
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      <PokemonList pokemons={pokemons} />
    </div>
  );
}

const mapStateToProps = (state => ({
  pokemons: state.pokemons,
}));

const mapDispatchToProps = (dispatch) => ({
  setPokemons: value => dispatch(setPokemonsActions(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(App); */

function App() {
  const pokemons = useSelector(state => state.pokemons);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPokemons = async () => {
      const pokemonRes = await getPokemon();
      const pokemonDetails = await Promise.all(
        pokemonRes.map(pokemon => getPokemonDetails(pokemon))
      );
      dispatch(setPokemons(pokemonDetails));
    }
    fetchPokemons();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <Col span={4} offset={10} >
        <img src={logo} alt="Pokedux" />
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      <PokemonList pokemons={pokemons} />
    </div>
  );
}

export default App;
