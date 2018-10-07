import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import EditMovieModal from './EditMovieModal';
import DeleteMovieModal from './DeleteMovieModal';


class MovieListItem extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      Title: props.Title,
      Year: props.Year,
      Runtime: props.Runtime,
      Genre: props.Genre,
      Director: props.Director,
      Poster: props.Poster,
      imdbID: props.imdbID,
      isEditModalOpen: false,
      isDeleteModalOpen: false
    };
  };


  openModal = (modalName) => {
    if (modalName === "EditModal") {
      this.setState(() => ({
        isEditModalOpen: true
      }))
    } else {
      this.setState(() => ({
        isDeleteModalOpen: true
      }))
    }
  }

  closeModal = () => {
    this.setState(() => ({
      isEditModalOpen: false,
      isDeleteModalOpen: false
    }))
  }

  render() {
    const { Title, Year, Runtime, Genre, Director, Poster, imdbID } = this.props;
    return (

      <Card className="card"  >
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          className="image"
          image={Poster}/>
        <CardContent className="Movie-Card">

          <div className="box-control">

            <div className="flex d-col movie-info">

              <Typography className="txt" variant="headline" component="h2">{Title}</Typography>

              <Typography className="txt" >{Year}</Typography>

              <Typography className="txt" component="p"> {Runtime} </Typography>

              <Typography className="txt" component="p"> {Genre} </Typography>

              <Typography className="txt" component="p"> {Director} </Typography>

            </div>

            <div className="flex d-row j-space-between">
              <button variant="contained" color="primary" className="button" onClick={() => this.openModal("EditModal")}>EDIT</button>
              <button  className="button" onClick={() => this.openModal("DeleteModal")}>DELETE</button>
            </div>

            <EditMovieModal
              isModalOpen={this.state.isEditModalOpen}
              closeModal={this.closeModal}
              Title={Title}
              Year={Year}
              Runtime={Runtime}
              Genre={Genre}
              Director={Director}
              Poster={Poster}
              imdbID={imdbID}/>


            <DeleteMovieModal
              isModalOpen={this.state.isDeleteModalOpen}
              closeModal={this.closeModal}
              imdbID={imdbID}/>

          </div>
        </CardContent>
      </Card>
    )
  }
}


export default MovieListItem;

