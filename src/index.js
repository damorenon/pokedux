import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { pokemonsReducer } from './reducers/pokemons';
import { legacy_createStore as createStore, compose, applyMiddleware } from 'redux';
import { featuring, logger } from './middlewares';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

const composedEnhancer = compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(logger, featuring)
)

const store = createStore(
  pokemonsReducer,
  composedEnhancer
);

root.render(
  <React.StrictMode>
    <Provider store={store} >
      <App />
    </Provider>
  </React.StrictMode>
);