import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import GitHubIcon from '@material-ui/icons/GitHub';
import Complimentor from "../media/Complimentor.JPG";
import Covid_Iowa from "../media/Covid_Iowa.JPG"

const useStyles = makeStyles({

  root: {
    maxWidth: 345,
    margin:10,
    minWidth:'33%',
  },
});

export default function Projects () {
    const classes = useStyles();

  return (
    <div classname="allheader" id="project">
    <h2 className="timeline_header"> Projects</h2>
    <div className="card_container">
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="240"
          image={Complimentor}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h3" component="h3">
            Complimentor
          </Typography>
          <Typography variant="body3" color="textSecondary" component="p" id="style_tasks">
            This application was created to share a compliment to your loved ones. It was created using the Twilio API, Javascript and Vue. 
            The number of the receiver has to be verified and the sendor needs a Twilio Account to use this web application. 

            
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          <GitHubIcon
          onClick={() => window.open('https://www.Linkedin.com')}
          />
        </Button>
      </CardActions> 

    </Card>
     <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="240"
          image={Covid_Iowa}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h3" component="h3">
            COVID Locator
          </Typography>
          <Typography variant="body3" color="textSecondary" component="p" id="style_tasks">
            This application gives you the real time mapped data of the Infected, Recovered,and Death population in Iowa. You can see your safety based on which county are you currently located in.
             You can zoom in the map for more clarity.(Source: The map was created using geopandas and matplotlib in spyder and integrated in Django.)
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          <GitHubIcon
          onClick={() => window.open('https://www.Linkedin.com')}
          />
        </Button>
      </CardActions>
    </Card>

  
    </div>
    </div>
  );
}
