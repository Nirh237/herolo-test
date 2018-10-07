import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import { getMovieByTitle } from '../actions/movies';
import MovieListItem from '../components/MovieListItem';
import AddMovieModal from '../components/AddMovieModal';



class MoviePage extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      movieTitleArry: ['Star wars', 'The Shawshank Redemption', 'The Godfather', 'The Dark Knight', '12 Angry Men', 'The Lord of the Rings: The Return of the King', 'Pulp Fiction', 'Batman v Superman'],
      isAddMovieModalOpen: false
    };
  };

  openModal = () => {

    this.setState(() => ({
      isAddMovieModalOpen: true
    }))
  }

  closeModal = () => {
    this.setState(() => ({
      isAddMovieModalOpen: false

    }))
  }



  componentDidMount() {
    this.state.movieTitleArry.map((title) => {
      this.props.getMovieByTitle(title)
    })

  }

  render() {
    const { movies } = this.props;
    return (

      <div className="Rectangle">
        <Header />
        <div className="List">
          {movies.map((movie) => { return <MovieListItem key={movie.Title} {...movie} />; })}


        </div>

        <div className="flex a-center j-center Footer">

          <div className="flex a-center j-center">

            <button className="flex a-center j-center big-button" onClick={() => this.openModal()}> + </button>

            <AddMovieModal
              isModalOpen={this.state.isAddMovieModalOpen}
              closeModal={this.closeModal} />

          </div>
        </div>


      </div>
    )
  };

};

const mapDispatchToProps = (dispatch) => ({
  getMovieByTitle: (title) => dispatch(getMovieByTitle(title)),
});

const mapStateToProps = (state) => ({
  movies: state.movies,
});


export default connect(mapStateToProps, mapDispatchToProps)(MoviePage);
