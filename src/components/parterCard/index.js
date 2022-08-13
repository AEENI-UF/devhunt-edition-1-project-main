import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Box,
  Grid,
  Avatar,
  Typography,
  Button,
} from "@mui/material";
import Bg1 from "../../assets/wecours.jpg";
import * as React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  Media: {
    clipPath: "polygon(0 0, 100% 0, 100% 92%, 0 65%)",
  },
  Avatar: {
    position: "absolute !important",
    top: "100px !important",
    left: "15px !important",
    width: "60px !important",
    border: "6px solid white",
    height: "60px !important",
  },
  btn: {
    backgroundColor: "red",
  },
});
////width: 150, height: 200
export default function PartenaireCard() {
  const classes = useStyles();
  return (
    <Card
      sx={{
        width: { xs: 150, md: 260 },
        height: { xs: 200, md: 330 } /*  border: "dotted"  */,
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          width="100%"
          height="auto"
          image={Bg1}
          alt="green iguana"
          className={classes.Media}
        />
        <Avatar className={classes.Avatar} alt="image" src={Bg1} />
        <CardContent sx={{ marginTop: "-34px", padding: "32px" }}>
          <Typography variant="h6" color="black">
            Partenaire Name
          </Typography>
          <Typography variant="subtitle2">
            blablablablalbalb blablablablal blablablabla
          </Typography>
          {/*  <Button className={classes.btn} variant="contained">
            view profil
          </Button> */}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
