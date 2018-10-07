const MovieReducerDefaultState = [];

const MovieReducer = (state = MovieReducerDefaultState, action) => {
    switch (action.type) {

      case 'ADD_MOVIE': return [...state,action.movie];

      case 'EDIT_MOVIE': return state.map((movie) => {
        if(movie.imdbID === action.imdbID){
          return {
            ...movie,...action.updates
          };
        } return movie;
      });

      case 'DELETE_MOVIE': return state.filter(({imdbID}) => imdbID !== action.imdbID );
      

      default:
        return state;
    }
  };

  export default MovieReducer;