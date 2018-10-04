import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import PopupCom from "./Popup";
import MoviePopup from "./MoviePopup";

import ReactDOM from "react-dom";
import { get } from 'http';

const openPopup = (data) => {

  const container = document.createElement("div");
  document.body.appendChild(container);
  //  ReactDOM.render(<PopupCom Title={Title} Year={Year} > </PopupCom>, container);
  ReactDOM.render(<MoviePopup store={data}> </MoviePopup>, container);
}


const MovieListItem = ({ Title, Year, Poster }) => (



  <Card className="card">
    <CardMedia
      component="img"
      alt="Contemplative Reptile"
      className="image"
      image={Poster}
    />
    <CardContent className="Movie-Card">

      <div className="box-control">

        <div className="flex d-col movie-info">

          <Typography className="txt" >{Title}</Typography>

          <Typography className="txt" variant="headline" component="h2">{Title}</Typography>

          <Typography className="txt" >{Year}</Typography>

          <Typography className="txt" component="p">
            well meaning and kindly.
          <br />
            {'"a benevolent smile"'}
          </Typography>

        </div>

        <div className="flex d-row j-space-between">
          <Button variant="contained" color="primary" className="button" onClick={() => openPopup({ Title, Year, Poster })}>OPEN</Button>
          <Button variant="contained" color="primary" className="button">DELETE</Button>
        </div>



      </div>

    </CardContent>

  </Card>

);



export default MovieListItem;

//  <PopupCom Title={Title} Year={Year} > </PopupCom>