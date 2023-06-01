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
                This project, developed as part of my independent study in Machine Learning and Neural Networks, focuses on creating a robust mask detection application. Leveraging pre-existing face detection models, the application is designed to accurately detect the presence of masks in images. The model was trained using a diverse dataset of masked and unmasked images, enabling it to provide reliable mask detection results. Additionally, the application supports real-time mask detection through live streaming. For more detailed information, please refer to the code available on my GitHub repository.
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
               This MERN (MongoDB, Express, React.js, Node.js) application serves as the accumulation of graduating student's capstone projects for juniors to refer. This application is the culmination of my independent study in Full Stack Development. It showcases the implementation of a comprehensive web development framework, where React.js powers the presentation layer, Express and Node.js form the application layer, and MongoDB serves as the database layer. By utilizing this powerful stack, the application delivers a seamless and efficient user experience while leveraging the strengths of each technology. For further details, please explore the project on my portfolio or GitHub repository.
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
                This application was developed with the intention of spreading positivity and sharing compliments with loved ones. Built using the Twilio API, JavaScript, and Vue, it offers a user-friendly interface for sending personalized messages. To ensure security and authenticity, the receiver's phone number undergoes a verification process. Additionally, users are required to have a Twilio Account to utilize this web application effectively. Once sent, the receiver will receive a message from the designated Twilio number. For more information and to explore the code, please visit my portfolio or GitHub repository.
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
                This application provides real-time mapped data of the infected, recovered, and death population in Iowa. By utilizing this interactive map, users can assess the safety level of their current county. The map allows zooming in for enhanced clarity and a better understanding of the data. Stay informed about the COVID-19 situation in Iowa and make informed decisions using this user-friendly application.
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
