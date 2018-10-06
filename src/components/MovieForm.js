import React from 'react';



export default class MovieForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            Title: props.Title ? props.Title : '',
            Year: props.Year ? props.Year : '',
            Runtime: props.Runtime ? props.Runtime : '' ,
            Genre: props.Genre? props.Genre : '',
            Director: props.Director ? props.Director : '',
            Poster: props.Poster ? props.Poster : '',
            error: ''
        };
        debugger;
    }


    onTitleChange = (e) => {

        const Title = e.target.value; //  e.persist(); אחד מהשניים הוא חובה
        this.setState(() => ({ Title }));
    };

    onYearChange = (e) => {

        const Year = e.target.value; //  e.persist(); אחד מהשניים הוא חובה
        this.setState(() => ({ Year }));
    };

    onRuntimeChange = (e) => {

        const Runtime = e.target.value; //  e.persist(); אחד מהשניים הוא חובה
        this.setState(() => ({ Runtime }));
    };

    onGenreChange = (e) => {

        const Genre = e.target.value; //  e.persist(); אחד מהשניים הוא חובה
        this.setState(() => ({ Genre }));
    };

    onDirectorChange = (e) => {

        const Director = e.target.value; //  e.persist(); אחד מהשניים הוא חובה
        this.setState(() => ({ Director }));
    };

    onSubmit = (e) => {
        e.preventDefault();
debugger;
        if (!this.state.Title || !this.state.Year || !this.state.Genre || !this.state.Runtime || !this.state.Dirctor) {
            this.setState(() => ({ error: "Fields should be with values!" }));
        } else {
            this.setState(() => ({ error: "" }));
            this.props.onSubmit({
                Title: this.state.Title,
                Year: this.state.Year,
                Runtime: this.state.Runtime,
                Genre: this.state.Genre,
                Director: this.state.Director,
                Poster: this.state.Poster
            })
            this.props.handleClearSelectedMovie();
        }
    }





    render() {
        return (
            <form className="form" onSubmit={this.onSubmit} >
                {this.state.error && <p className="form__error">{this.state.error}</p>}
                <div className="flex d-col input-form">
                    <span>TITLE:</span>
                    <input
                        type="text"
                        autoFocus
                        value={this.state.Title}
                        onChange={this.onTitleChange}
                    />
                </div>

                <div className="flex  d-col  input-form">
                    <span>YEAR:</span>
                    <input
                        type="text"
                        value={this.state.Year}
                        onChange={this.onYearChange}
                    />
                </div>
                <div className="flex d-col  input-form">
                    <span>Runtime:</span>
                    <input
                        type="text"
                        autoFocus
                        value={this.state.Runtime}
                        onChange={this.onRuntimeChange}
                    />
                </div>
                <div className="flex d-col  input-form">
                    <span>Genre:</span>
                    <input
                        type="text"
                        value={this.state.Genre}
                        onChange={this.onGenreChange}
                    />
                </div>

                <div className="flex d-col  input-form">
                    <span>Dirctor:</span>
                    <input
                        type="text"
                        value={this.state.Director}
                        onChange={this.onDirectorChange}
                    />
                </div>

                <div className="flex d-row j-space-between">
                    <button className="button">Save</button>

                </div>


            </form>
        )
    }
}