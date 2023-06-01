import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { FaResearchgate } from "react-icons/fa";
import research from "../media/research.JPG";

const useStyles = makeStyles({
  root: {
    maxWidth: 445,
    margin: 10,
    minWidth: "33%",
  },
});

export default function Research() {
  const classes = useStyles();

  return (
    <div className="allheaders" id="research">
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
                Mathematical and Computation modeling of COVID-19 Spreading and
                Dynamics in Iowa
              </Typography>
              <Typography
                variant="body3"
                color="textPrimary"
                component="p"
                id="style_tasks"
              >
                I conducted extensive research on modeling the optimal vaccination supply strategy to combat the disease effectively. The research included incorporating the latest mutation in the coronavirus and the need for booster shots into the model. Although my intention was to publish the findings in undergraduate research journals, the research phase was completed upon my graduation. The study addressed data gaps and potential flaws, contributing valuable insights towards ending the disease as soon as possible.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="large" color="primary">
              <FaResearchgate
                size={30}
                onClick={() =>
                  window.open(
                    "https://drakeedu-my.sharepoint.com/:p:/g/personal/ajal_rc_drake_edu/Eec0eE7_dwRBilzwoyeEV3wBi6uRMPSrSwjC8Gy7U6Kf3g?e=mqAjRK"
                  )
                }
              />
            </Button>
          </CardActions>
        </Card>
      </div>
    </div>
  );
}
