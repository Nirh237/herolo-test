const MovieReducerDefaultState = [];

const MovieReducer = (state = MovieReducerDefaultState, action) => {
    switch (action.type) {

      case 'SET_movies': return action.movies;

      default:
        return state;
    }
  };

  export default MovieReducer;