import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import './styles/styles.scss';
import MoviePage from './pages/MoviePage';


const store = configureStore();

class App extends React.Component {

  render() {
    return (
  <Provider store={store}>
    <MoviePage />
  </Provider>
);
}
}

export default App;

 







