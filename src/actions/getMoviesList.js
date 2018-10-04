import axios from 'axios';



export const error = (msg) => ({
  type: 'ERROR',
  msg
});

export const setMovies = (movies) => ({
  type: 'SET_movies',
  movies
});

export const setMovie = (state, action) => {

  switch (action.type) {
    case "UPDATE_MOVIE": {
      const updatedItems = state.map(item => {
        if (item.id === action.id) {
          return { ...item, ...action.payload }
        }
        return item;
      })
      return updatedItems
    }
  }

};

const getMovies = () => {
  return (dispatch) => {

    return axios.post(`http://www.omdbapi.com/?s=Superman&page=1&apikey=98f17da2`)
      .then(res => {
        console.log(res);

        const moviesArry = [];
        const movies = res.data.Search;

        movies.forEach(child => {
          moviesArry.push({ ...child });
        });

        if (movies != null) {
          // localStorage.setItem("movies",movie.Year);
          dispatch(setMovies(moviesArry));
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

const getMovie = (id) => {
  return (dispatch) => {

    return axios.post(`http://www.omdbapi.com/?i=${id}&plot=full`)
      .then(result => {

      });
  }
}

export {
  getMovies,
  getMovie
}



//http://www.omdbapi.com/?s=Batman&page=1&apikey=98f17da2