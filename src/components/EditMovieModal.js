import React from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import { startEditMovie } from '../actions/movies';


Modal.setAppElement('#root')

class EditMovieModal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            Title: props.Title,
            Year:props.Year,
            Runtime: props.Runtime,
            Genre: props.Genre,
            Director: props.Director,
            Poster: props.Poster,
            imdbID: props.imdbID,
            error: ''
        };
    }

    formatTitle = (title) => {
        return title.replace(/[^a-zA-Z ]/g, "").toLowerCase()
            .split(' ')
            .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
            .join(' ')
    }


    onTitleChange = (e) => {
        const Title = e.target.value;
        this.setState(() => ({ Title }));
    };

    onYearChange = (e) => {
        const Year = e.target.value;
        this.setState(() => ({ Year }));
    };

    onRuntimeChange = (e) => {
        const Runtime = e.target.value;
        this.setState(() => ({ Runtime }));
    };

    onGenreChange = (e) => {
        const Genre = e.target.value;
        this.setState(() => ({ Genre }));
    };

    onDirectorChange = (e) => {
        const Director = e.target.value;
        this.setState(() => ({ Director }));
    };

    handleSave = (e) => {
        e.preventDefault();
debugger;
        if (!this.state.Title || !this.state.Year || !this.state.Genre || !this.state.Runtime || !this.state.Director) {
            this.setState(() => ({ error: "Fields should be with values!" }));
        } else if (this.props.movies.find((movie) => movie.Title === this.state.Title)) {
            this.setState(() => ({ error: "Title Allready exist!!" }));
        } else if (parseInt(this.state.Year) > new Date().getFullYear()) {
            this.setState(() => ({ error: "Year is not valid!!" }));
        }else {
            this.setState(() => ({ error: "" }));
            this.props.startEditMovie(this.state.imdbID, {
                Title: this.formatTitle(this.state.Title),
                Year: this.state.Year,
                Runtime: this.state.Runtime,
                Genre: this.state.Genre,
                Director: this.state.Director,
                Poster: this.state.Poster

            });
            this.props.closeModal();
        }
    }



    render() {
        return (
            <Modal
                isOpen={!!this.props.isModalOpen}
                onRequestClose={this.props.closeModal}
                contentLabel="EDIT MOVIE"
                closeTimeoutMS={200}
                className="modal">

                <h3 className="modal__title">Edit Movie</h3>
                <p className="modal__body"></p>

                <form className="form"  >
                    {this.state.error && <p className="form__error">{this.state.error}</p>}
                    <div className="flex d-col input-form">
                        <span>TITLE:</span>
                        <input
                            type="text"
                            autoFocus
                            value={this.state.Title}
                            onChange={this.onTitleChange} />
                    </div>

                    <div className="flex  d-col  input-form">
                        <span>YEAR:</span>
                        <input
                            type="text"
                            value={this.state.Year}
                            onChange={this.onYearChange} />
                    </div>

                    <div className="flex d-col  input-form">
                        <span>RUNTIME:</span>
                        <input
                            type="text"
                            autoFocus
                            value={this.state.Runtime}
                            onChange={this.onRuntimeChange} />
                    </div>

                    <div className="flex d-col  input-form">
                        <span>GENRE:</span>
                        <input
                            type="text"
                            value={this.state.Genre}
                            onChange={this.onGenreChange} />
                    </div>

                    <div className="flex d-col  input-form">
                        <span>DIRECTOR:</span>
                        <input
                            type="text"
                            value={this.state.Director}
                            onChange={this.onDirectorChange} />
                    </div>
                </form>

                <div className="flex d-row j-space-between">
                    <button className="button" onClick={this.handleSave}>Save</button>
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
    startEditMovie: (imdbID, movie) => dispatch(startEditMovie(imdbID, movie))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditMovieModal);
