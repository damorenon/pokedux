import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Col } from 'antd';
import PokemonList from './components/PokemonList';
import Searcher from './components/Searcher';
import { getPokemon } from './api';
import { setPokemons as setPokemonsActions } from './actions';
import logo from './statics/logo.svg';
import './App.css';

function App({ pokemons, setPokemons }) {
  console.log("🚀 ~ file: App.js:12 ~ App ~ pokemons:", pokemons)

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

export default connect(mapStateToProps, mapDispatchToProps)(App);
