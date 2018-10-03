import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import { getMovies } from '../actions/auth';
import MovieListItem from '../components/MovieListItem';









class MoviePage extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      movies: this.props.movies,


    };
  };



  componentDidMount() {
    this.props.getMovies()
      .then(result => this.setState({ movies: result }));
  }




  render() {


    const movieList = this.state.movies.map(movie => {
      return <div key={movie.Title} >{movie.Title} </div>
    })
    return (

      <div>
        <Header />
        {movieList}
        {// order categorys list render
          this.state.movies.length === 0
          ? (
            <div >
              <span></span>
            </div>
          )
          : (
            this.state.movies.map((movie) => {
            return <MovieListItem key={movie.Title} {...movie}/>;
          }))
        }

      </div>
    )
  };

};
const mapDispatchToProps = (dispatch) => ({
  getMovies: () => dispatch(getMovies()),



});

const mapStateToProps = (state) => ({
  movies: state.movies,


});


export default connect(mapStateToProps, mapDispatchToProps)(MoviePage);