import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Avatar,
  Typography,
} from "@mui/material";
import Bg1 from "../../assets/wecours.jpg";
import * as React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  Media: {
    clipPath: "polygon(0 0, 100% 0, 100% 92%, 0 65%)",
    height: "120px",
  },
  Avatar: {
    position: "absolute !important",
    top: "50px !important",
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
export default function PartenerCard({ item }) {
  const classes = useStyles();
  return (
    <Card
      sx={{
        width: { xs: "95%", sm: 240, md: 220 },
        height: { xs: 280, md: 300 } /*  border: "dotted"  */,
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          width="100%"
          height="auto"
          image={item.cover}
          alt="green iguana"
          className={classes.Media}
        />
        <Avatar
          sx={{ borderColor: "background.paper" }}
          className={classes.Avatar}
          alt="image"
          src={Bg1}
        />
        <CardContent sx={{ marginTop: "-34px", padding: "32px" }}>
          {<Typography variant="h6">{item.partener}</Typography>}
          <Typography variant="subtitle2">{item.description}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
