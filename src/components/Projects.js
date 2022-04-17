import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import GitHubIcon from "@material-ui/icons/GitHub";
import Complimentor from "../media/Complimentor.JPG";
import MERN from "../media/MERN.png";
import Covid_Iowa from "../media/Covid_Iowa.JPG";
import mask_nomask from "../media/mask_nomask.png";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: 10,
    minWidth: "33%",
  },
});

export default function Projects() {
  const classes = useStyles();

  return (
    <div className="allheader" id="project">
      <h2 className="timeline_header"> Projects</h2>
      <div className="card_container">
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Face Mask Detector"
              height="240"
              image={mask_nomask}
              title="Face Mask Detector"
            />
            <CardContent>
              <Typography gutterBottom variant="h3" component="h3">
                Face Mask Detector
              </Typography>
              <Typography
                variant="body3"
                color="textSecondary"
                component="p"
                id="style_tasks"
              >
                This application was created as a final project for my
                independent study in Machine Leanring and Neural Networks. This
                detector uses pre-existing face detection models to detect the
                presence of masks. Masked and unmasked images were used to train
                the model and output the presence of masks in a given image.
                Live stream can also be done for mask detection. Please look at
                the code in github to see in more details.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              <GitHubIcon
                onClick={() =>
                  window.open("https://github.com/ajalrc/mask_detection")
                }
              />
            </Button>
          </CardActions>
        </Card>

        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Student Capstones holder"
              height="240"
              image={MERN}
              title="Student Capstones holder"
            />
            <CardContent>
              <Typography gutterBottom variant="h3" component="h3">
                Student Capstones holder
              </Typography>
              <Typography
                variant="body3"
                color="textSecondary"
                component="p"
                id="style_tasks"
              >
                This is a MERN application created as a final project for my
                independent study in Full stack development. In this
                application, I am using the web development framework made up of
                stack of MongoDB, Express, React.js ,and Node.js. Here, React
                creates the presentation layer, Express and Node makes up the
                middle or application layer, and MongoDB as the database layer.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              <GitHubIcon
                onClick={() =>
                  window.open(
                    "https://github.com/ajalrc/Capstone_database_MERN_Stack"
                  )
                }
              />
            </Button>
          </CardActions>
        </Card>

        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Complimentor"
              height="240"
              image={Complimentor}
              title="Complimentor"
            />
            <CardContent>
              <Typography gutterBottom variant="h3" component="h3">
                Complimentor
              </Typography>
              <Typography
                variant="body3"
                color="textSecondary"
                component="p"
                id="style_tasks"
              >
                This application was created to share a compliment to your loved
                ones. It was created using the Twilio API, Javascript and Vue.
                The number of the receiver has to be verified and the sender
                needs a Twilio Account to use this web application. The receiver
                will receive a message from the number provided from Twilio.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              <GitHubIcon
                onClick={() => window.open("https://memories2020.netlify.app")}
              />
            </Button>
          </CardActions>
        </Card>

        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="COVID Locator"
              height="240"
              image={Covid_Iowa}
              title="COVID Locator"
            />
            <CardContent>
              <Typography gutterBottom variant="h3" component="h3">
                COVID Locator
              </Typography>
              <Typography
                variant="body3"
                color="textSecondary"
                component="p"
                id="style_tasks"
              >
                This application gives you the real time mapped data of the
                Infected, Recovered, and Death population in Iowa. You can see
                your safety based on which county are you currently located in.
                You can zoom in the map for more clarity.
                <p>
                  (Source: The map was created using geopandas and matplotlib in
                  spyder and integrated in Django.)
                </p>
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              <GitHubIcon
                onClick={() =>
                  window.open("https://github.com/ajalrc/iowa_covid19_cases")
                }
              />
            </Button>
          </CardActions>
        </Card>
      </div>
    </div>
  );
}
