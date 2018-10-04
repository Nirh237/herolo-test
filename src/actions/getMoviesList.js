import axios from 'axios';


export const error = (msg) => ({
  type: 'ERROR',
  msg
});

export const setMovie = (movies) => ({
  type: 'SET_movies',
  movies
});

export const getMovies = () => {
  return (dispatch) => {

    return axios.post(`http://www.omdbapi.com/?s=Superman&page=1&apikey=98f17da2`)
      .then(res => {
        console.log(res);
        
        const moviesArry = [];
        const movies = res.data.Search;
       
        movies.forEach(child => {
          moviesArry.push({...child});
        });

        if (movies != null) {
          // localStorage.setItem("movies",movie.Year);
          dispatch(setMovie(moviesArry));
        }
        else {
          dispatch(error('Error'));
        }

        return moviesArry;

      }).catch((error) => {
        console.log(error);
      })
  };
};


//http://www.omdbapi.com/?s=Batman&page=1&apikey=98f17da2