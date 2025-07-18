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
              <Typography variant="body2" color="textPrimary" component="div" id="style_tasks">
                A real-time face mask detection system built during my independent study in machine learning. Designed to assist public safety by detecting mask usage in live streams and static images.
                <ul>
                  <li>Real-time face mask detection using Python, TensorFlow, and OpenCV.</li>
                  <li>Trained a CNN on a custom dataset of masked/unmasked faces using Keras.</li>
                  <li>Implemented webcam streaming with bounding box overlays and prediction confidence.</li>
                  <li>Deployed as a desktop tool with GUI using PyQt5 for real-time interaction.</li>
                </ul>
                <strong>🛠 Tech used:</strong> TensorFlow, OpenCV, Python, Keras, PyQt5
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              <GitHubIcon onClick={() => window.open("https://github.com/ajalrc/mask_detection")} />
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
                Student Capstones Holder
              </Typography>
              <Typography variant="body2" color="textPrimary" component="div" id="style_tasks">
                A web platform to help junior students explore and review senior capstone projects. Developed during my full-stack development independent study using the MERN stack.
                <ul>
                  <li>Developed a MERN stack web app to host and manage capstone submissions.</li>
                  <li>Designed the React interface with forms and table views for capstone entries.</li>
                  <li>Built secure REST APIs using Express and Node.js for CRUD operations.</li>
                  <li>Stored project metadata in MongoDB and handled indexing and validation.</li>
                </ul>
                <strong>🛠 Tech used:</strong> React, Node.js, Express, MongoDB, Heroku
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              <GitHubIcon onClick={() => window.open("https://github.com/ajalrc/Capstone_database_MERN_Stack")} />
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
              <Typography variant="body2" color="textPrimary" component="div" id="style_tasks">
                A positive messaging tool built to send verified compliments via SMS. Developed to explore Twilio’s messaging APIs and Vue’s lightweight reactive UI capabilities.
                <ul>
                  <li>Created a Vue.js web app to send anonymous compliments using Twilio SMS.</li>
                  <li>Integrated phone number verification and validation with Twilio’s API.</li>
                  <li>Handled frontend user input and error handling for clean UX.</li>
                  <li>Deployed using Netlify with basic routing and domain setup.</li>
                </ul>
                <strong>🛠 Tech used:</strong> Vue, Twilio API, JavaScript, Netlify
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              <GitHubIcon onClick={() => window.open("https://memories2020.netlify.app")} />
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
              <Typography variant="body2" color="textPrimary" component="div" id="style_tasks">
                A data visualization dashboard for tracking COVID-19 rates across Iowa counties. Created during the pandemic to experiment with GIS data, shapefiles, and Python-based plotting.
                <ul>
                  <li>Mapped COVID-19 infection and recovery data for Iowa counties.</li>
                  <li>Used GeoPandas and shapefiles to draw accurate maps and overlays.</li>
                  <li>Integrated Matplotlib graphs into an interactive Django web app.</li>
                  <li>Allowed users to filter data by region and zoom into specific counties.</li>
                </ul>
                <strong>🛠 Tech used:</strong> Django, GeoPandas, Python, Matplotlib
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              <GitHubIcon onClick={() => window.open("https://github.com/ajalrc/iowa_covid19_cases")} />
            </Button>
          </CardActions>
        </Card>
      </div>
    </div>
  );
}
