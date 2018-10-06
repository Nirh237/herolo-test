import { createStore, combineReducers, applyMiddleware, compose } from '../../../../AppData/Local/Microsoft/TypeScript/2.9/node_modules/redux';
import thunk from 'redux-thunk';
import MovieReducer from '../reducers/movies';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      movies: MovieReducer,
    }),
    composeEnhancers(applyMiddleware(thunk))
  );
  console.log('running');
  return store;
};

