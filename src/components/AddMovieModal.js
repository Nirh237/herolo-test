import React from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import { getMovieByTitle } from '../actions/movies';


Modal.setAppElement('#root')

class AddMovieModal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: ''
        };
    }

    formatTitle = (title) => {
        return title.replace(/[^a-zA-Z ]/g, "").toLowerCase()
            .split(' ')
            .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
            .join(' ')
    }

    onTitleChange = (e) => {
        const title = e.target.value;
        this.setState(() => ({ title }));
    };


    handleAdd = (e) => {
        e.preventDefault();
        this.props.getMovieByTitle(this.formatTitle(this.state.title))
        this.props.closeModal();
    }

    render() {
        return (
            <Modal
                isOpen={!!this.props.isModalOpen}
                onRequestClose={this.props.closeModal}
                contentLabel="EDIT MOVIE"
                closeTimeoutMS={200}
                className="modal">

                <h3 className="modal__title">Add Movie</h3>
                <p className="modal__body"></p>

                <form className="form"  >
                    {this.state.error && <p className="form__error">{this.state.error}</p>}
                    <div className="flex d-col input-form">
                        <span>Enter full movie title:</span>
                        <input
                            type="text"
                            autoFocus
                            value={this.state.Title}
                            onChange={this.onTitleChange}/>
                    </div>
                </form>

                <div className="flex d-row j-space-between">
                    <button className="button" onClick={this.handleAdd}>Add</button>
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
    getMovieByTitle: (title) => dispatch(getMovieByTitle(title))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddMovieModal);

