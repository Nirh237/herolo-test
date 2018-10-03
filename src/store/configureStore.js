import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import MovieReducer from '../reducers/auth';




const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      movies: MovieReducer,
     



    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};

