import React from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import MovieForm from './MovieForm';
import { startDelteMovie } from '../actions/movies';


Modal.setAppElement('#root')

class DeleteMovieModal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            imdbID: props.imdbID,


        };

    }




    handleDelete = () => {
        this.props.startDelteMovie({ imdbID: this.props.imdbID })
    }


    render() {


        return (
            <Modal
                isOpen={!!this.props.isModalOpen}
                onRequestClose={this.props.closeModal}
                contentLabel="DELETE MOVIE"
                closeTimeoutMS={200}
                className="modal"
            >

                <h3 className="modal__title">Delete Movie</h3>
                <p className="modal__body">Delete movie?</p>






                <div className="flex d-row j-space-between">
                    <button className="button" onClick={this.handleDelete}>Ok</button>
                    <button className="button" onClick={this.props.closeModal}>Cancel</button>
                </div>
            </Modal>
        )

    }

}
const mapStateToProps = (state, props) => ({
movies: state.movies

});

const mapDispatchToProps = (dispatch, props) => ({
    startDelteMovie: (data) => dispatch(startDelteMovie(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(DeleteMovieModal);

     // <MovieForm
                //     Title={this.props.Title}
                //     Year={this.props.Year}
                //     Runtime={this.props.Runtime}
                //     Genre={this.props.Genre}
                //     Director={this.props.Director}
                //     onSubmit={this.onSubmit}


                // />