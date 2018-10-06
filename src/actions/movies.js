import axios from 'axios';



export const error = (msg) => ({
  type: 'ERROR',
  msg
});

export const addMovie = (movie) => ({
  type: 'ADD_MOVIE',
  movie
});

// export const addMovie = (state, action) => {

//   switch (action.type) {
//     case "UPDATE_MOVIE": {
//       const updatedItems = state.map(item => {
//         if (item.id === action.id) {
//           return { ...item, ...action.payload }
//         }
//         return item;
//       })
//       return updatedItems
//     }
//   }

// };

const getMovieByTitle = (title) => {
 
  return (dispatch) => {

    return axios.post(`http://www.omdbapi.com/?&apikey=98f17da2&t='${title}'`)
      .then(res => {
        console.log(res);

       
        const movie = res.data;

       

        if (movie != null) {
          // localStorage.setItem("movies",movie.Year);
          dispatch(addMovie(movie));
        }
        else {
          dispatch(error('Error'));
        }

      }).catch((error) => {
        console.log(error);
      })
  };
};

const editMovie = (imdbID,updates) => ({
  type: 'EDIT_MOVIE',
  imdbID,
  updates
});

const startEditMovie = (imdbID,updates) => {
  return (dispatch) => {
    dispatch(editMovie(imdbID,updates));
  }
}

const deleteMovie = ({imdbID} = {}) => ({
  type: 'DELETE_MOVIE',
  imdbID: imdbID
});

const startDelteMovie = ({ imdbID = {}}) => {
  return (dispatch) => {
   
      dispatch(deleteMovie({imdbID}));
   
  };
};




export {
  getMovieByTitle,
  startEditMovie,
  startDelteMovie
 
}



//http://www.omdbapi.com/?s=Batman&page=1&apikey=98f17da2