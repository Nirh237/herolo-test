import axios from 'axios';



export const error = (msg) => ({
  type: 'ERROR',
  msg
});

export const addMovie = (movie) => ({
  type: 'ADD_MOVIE',
  movie
});

const editMovie = (imdbID, updates) => ({
  type: 'EDIT_MOVIE',
  imdbID,
  updates
});

const deleteMovie = ({ imdbID } = {}) => ({
  type: 'DELETE_MOVIE',
  imdbID: imdbID
});

const getMovieByTitle = (title) => {

  return (dispatch) => {

    return axios.post(`https://www.omdbapi.com/?&apikey=98f17da2&t='${title}'`)
      .then(res => {
      

        const movie = res.data;

        if (movie.Response === "True") {
          dispatch(addMovie(movie));
        }
        else {
          dispatch(error('Error'));
        }
      }).catch((error) => {
     
      })
  };
};



const startEditMovie = (imdbID, updates) => {
  return (dispatch) => {
    dispatch(editMovie(imdbID, updates));
  }
}



const startDelteMovie = ({ imdbID = {} }) => {
  return (dispatch) => {
    dispatch(deleteMovie({ imdbID }));
  };
};

export {
  getMovieByTitle,
  startEditMovie,
  startDelteMovie
}


