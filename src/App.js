import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Spin } from 'antd';
import { get } from "immutable";

import PokemonList from './components/PokemonList';
import Searcher from './components/Searcher';
import { getPokemon } from './api';
import { getPokemonWithDetails } from './actions';
import logo from './statics/logo.svg';
import './App.css';

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
  const pokemons = useSelector(state => get(state, 'pokemons')).toJS();
  const loading = useSelector(state => get(state, 'loading'));
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPokemons = async () => {
      const pokemonRes = await getPokemon();
      dispatch(getPokemonWithDetails(pokemonRes));
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
      {
        loading ? (
          <Col offset={12}>
            <Spin spinning size='large' />
          </Col>
        ) : (
          <PokemonList pokemons={pokemons} />
        )
      }
    </div>
  );
}

export default App;
