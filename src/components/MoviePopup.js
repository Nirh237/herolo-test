import React from 'react';
import { connect } from 'react-redux';

import Button from '@material-ui/core/Button';
import Popup from "reactjs-popup";
import { getMovieByTitle } from '../actions/movies';





class MoviePopup extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            title: this.props.store.Title,
            year: this.props.store.Year,
            poster: this.props.store.Poster
        }



    };


    debugger;




    componentDidMount() {

    }

    onTitleChange = (e) => {

        const title = e.target.value; //  e.persist(); אחד מהשניים הוא חובה
        this.setState(() => ({ title }));
    };

    onYearChange = (e) => {

        const year = e.target.value; //  e.persist(); אחד מהשניים הוא חובה
        this.setState(() => ({ year }));
    };


    inputChangedHandler = (key, value) => {

    }


    render() {



        return (



            <Popup open={true} modal >
                {close => (
                    <div className="modal">

                        <a className="close" onClick={close}>&times;</a>

                        <div className="headerPopup"> EDIT </div>

                        <div className="content">
                            <form className="form">

                                <div className="flex d-col input-form">
                                    <span>TITLE:</span>
                                    <input
                                        type="text"

                                        autoFocus
                                        value={this.state.title}
                                        onChange={this.onTitleChange}
                                    />
                                </div>

                                <div className="flex  d-col  input-form">
                                    <span>YEAR:</span>
                                    <input
                                        type="text"
                                        value={this.state.year}
                                        onChange={this.onYearChange}
                                    />
                                </div>
                                <div className="flex d-col  input-form">
                                    <span>TITLE:</span>
                                    <input
                                        type="text"
                                        autoFocus
                                        value={this.state.title}
                                        onChange={this.onTitleChange}
                                    />
                                </div>
                                <div className="flex d-col  input-form">
                                    <span>YEAR:</span>
                                    <input
                                        type="text"
                                        value={this.state.year}
                                        onChange={this.onYearChange}
                                    />
                                </div>
                            </form>
                        </div>
                        <div className="actions">

                            <div className="flex d-row j-space-between">
                                <Button variant="contained" color="primary" className="button"
                                    onClick={() => {
                                        console.log('save ')

                                    }} >
                                    Save</Button>
                                <Button variant="contained" color="primary" className="button"
                                    onClick={() => {
                                        console.log('close ')
                                        close()
                                    }} >
                                    Cancel</Button>
                            </div>
                        </div>
                    </div>
                )}
            </Popup>
        )
    };
};


const mapDispatchToProps = (dispatch) => ({
    getMovieByTitle: () => dispatch(getMovieByTitle()),



});

const mapStateToProps = (state) => ({
    movies: state.movies,


});



export default MoviePopup;

//connect(mapStateToProps)