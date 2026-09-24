import React from "react";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { FaResearchgate } from "react-icons/fa";
import research from "../media/research.JPG";

const cardSx = { maxWidth: 445, margin: 1, minWidth: "33%" };

export default function Research() {
  return (
    <div className="allheaders" id="research">
      <h2 className="timeline_header">Ongoing Research</h2>
      <div className="card_container">
        <Card sx={cardSx}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="COVID-19 Research"
              height="240"
              image={research}
              title="COVID-19 Research"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h3">
                Mathematical and Computation modeling of COVID-19 Spreading and
                Dynamics in Iowa
              </Typography>
              <Typography
                variant="body2"
                color="text.primary"
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
