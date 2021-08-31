import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {FaResearchgate } from 'react-icons/fa';
import research from "../media/research.JPG"

const useStyles = makeStyles({

  root: {
    maxWidth: 445,
    margin:10,
    minWidth:'33%',
  },
});

export default function Research() {
  const classes = useStyles();

  return (
    <div classname ="allheaders" id="research">
    <h2 className="timeline_header">Ongoing Research</h2>
    <div className="card_container">
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="240"
          image={research}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h3">
            Mathematical  and Computation modeling of COVID-19 Spreading and Dynamics in Iowa
          </Typography>
          <Typography variant="body3" color="textPrimary" component="p" id="style_tasks">
            My research models the optimal way of vaccination supply to end the disease as soon as possible.
          This research would also fill the gap for the data that is still inadequate/ insufficient. We can also see verify if there might be some flaws in the data.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="large" color="primary">
          <FaResearchgate size={30}
          onClick={() => window.open('https://drakeedu-my.sharepoint.com/:p:/g/personal/ajal_rc_drake_edu/Eec0eE7_dwRBilzwoyeEV3wBxjxJSs_RyRcvky-ozLnehQ?email=ajalrc456%40gmail.com&e=KYOYqh')}
          />
        </Button>
      </CardActions> 

    </Card>
    </div>
    </div>
  );


}