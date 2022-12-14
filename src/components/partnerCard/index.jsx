import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
import * as React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  Media: {
    clipPath: "polygon(0 0, 100% 0, 100% 92%, 0 65%)",
    height: "150px",
  },
  Avatar: {
    position: "absolute !important",
    top: "65px !important",
    left: "15px !important",
    width: "80px !important",
    border: "6px solid white",
    height: "80px !important",
  },
  btn: {
    backgroundColor: "red",
  },
});

export default function PartnerCard({ item }) {
  const classes = useStyles();
  return (
    <Card
      sx={{
        // width: { xs: "95%", sm: 240, md: 220 },
        // height: { xs: 280, md: 240 },
        width: { xs: "95%", sm: 240, md: 200 },
        height: { xs: 280, md: 240 },
        // transform: "rotate(90deg)",
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          width="100%"
          height="auto"
          image={item.cover}
          alt=""
          className={classes.Media}
        />
        {/*  <Avatar
          sx={{ borderColor: "background.paper" }}
          className={classes.Avatar}
          alt="image"
          src={Bg1}
        /> */}
        <CardContent sx={{ marginTop: "-34px", padding: "32px" }}>
          {<Typography variant="h6">{item.partner}</Typography>}
          {/* <Typography variant="subtitle2">{item.description}</Typography> */}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
