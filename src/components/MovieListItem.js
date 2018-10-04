import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import PopupCom from "./Popup";





const MovieListItem = ({ Title, Year, Poster }) => (



  <Card className="card">
    <CardMedia
      component="img"
      alt="Contemplative Reptile"
      className="media"
      image={Poster}
    />
    <CardContent>
      <Typography className="title" color="textSecondary">
        {Title}
      </Typography>
      <Typography variant="headline" component="h2">
        {Title}
      </Typography>
      <Typography className="pos" color="textSecondary">
        {Year}
      </Typography>
      <Typography component="p">
        well meaning and kindly.
          <br />
        {'"a benevolent smile"'}
      </Typography>
    
      <PopupCom Title = {Title} Year = {Year} > </PopupCom>
      <Button variant="contained" color="primary" className="button">
      DELETE
    </Button>
    </CardContent>
   
  </Card>

);



export default MovieListItem;