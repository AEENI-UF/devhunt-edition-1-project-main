import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Akata from "../../assets/images/illustrations/illustration-akata.jpg";

export default function ClubPage({ club }) {
  const { t } = useTranslation();
  const imgStyle = {
    width: "100%",
    height: "20rem",
    borderRadius: 4,
    backgroundSize: "cover",
  };

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <Box sx={{ width: "100%", pb: 5 }}>
      <Container>
        <Box
          id="home"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            my: 5,
            // maxWidth: 700,
          }}
        >
          <Stack spacing={2} maxWidth={700} textAlign="center">
            <Typography variant="h1" sx={{ fontSize: { xs: 56, md: 62 } }}>
              {club.name}
            </Typography>
            <Typography variant="subtitle1">{t(club.description)}</Typography>
          </Stack>
        </Box>

        <Container>
          <Grid container spacing={1}>
            <Grid xs={12} lg={8} item>
              <Box
                sx={{
                  ...imgStyle,
                  backgroundImage: `url(${club.sourceUrl[0]})`,
                }}
              ></Box>
            </Grid>
            <Grid xs={12} lg={4} item>
              <Box
                sx={{
                  ...imgStyle,
                  backgroundImage: `url(${club.sourceUrl[0]})`,
                }}
              ></Box>
            </Grid>
            <Grid xs={12} lg={5} item>
              <Box
                sx={{
                  ...imgStyle,
                  backgroundImage: `url(${club.sourceUrl[1]})`,
                }}
              ></Box>
            </Grid>
            <Grid xs={12} lg={7} item>
              <Box
                sx={{
                  ...imgStyle,
                  backgroundImage: `url(${club.sourceUrl[2]})`,
                }}
              ></Box>
            </Grid>
            <Grid xs={12} lg={6} item>
              <Box
                sx={{
                  ...imgStyle,
                  backgroundImage: `url(${club.sourceUrl[3]})`,
                }}
              ></Box>
            </Grid>
            <Grid xs={12} lg={6} item>
              <Box
                sx={{
                  ...imgStyle,
                  backgroundImage: `url(${club.sourceUrl[4]})`,
                }}
              ></Box>
            </Grid>
            <Grid xs={12} lg={8} item>
              <Box
                sx={{
                  ...imgStyle,
                  backgroundImage: `url(${club.sourceUrl[5]})`,
                }}
              ></Box>
            </Grid>
            <Grid xs={12} lg={4} item>
              <Box
                sx={{
                  ...imgStyle,
                  backgroundImage: `url(${club.sourceUrl[6]})`,
                }}
              ></Box>
            </Grid>
          </Grid>
        </Container>
      </Container>
    </Box>
  );
}
// clip-path: polygon(49% 100%, 0 0, 100% 0);
/*


import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";
import Akata from "../../assets/images/illustrations/illustration-akata.jpg";

const ImageWidth = 180;

const container = {
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const imageDown = {
  hide: {
    opacity: 0,
    y: 400,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
};
const imageUp = {
  hide: {
    opacity: 0,
    y: -400,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
};

export default function C2E() {
  return (
    <Box sx={{ width: "100%", height: "30rem", border: "dotted" }}>
      <Box
        sx={{
          width: "100%",
          height: "10rem",
          backgroundColor: "red",
          display: { xs: "flex", md: "none" },
        }}
      ></Box>
      <Grid container>
        <Grid item lg={6} sx={{ zIndex: 2, p: "5rem 6rem 1rem 3rem" }}>
          <Stack
            component={motion.div}
            variants={container}
            initial="hide"
            animate="show"
            spacing={1}
            direction="row"
            justifyContent="center"
          >
            <motion.img
              variants={imageUp}
              src={Akata}
              alt="icon"
              style={{
                width: ImageWidth,
                borderRadius: 10,
                height: 350,
                position: "relative",
                top: -20,
              }}
            />
            <motion.img
              variants={imageDown}
              src={Akata}
              alt="icon"
              style={{
                width: ImageWidth,
                borderRadius: 10,
                height: 350,
                position: "relative",
                top: 50,
              }}
            />
            <motion.img
              variants={imageUp}
              src={Akata}
              alt="icon"
              style={{
                width: ImageWidth,
                borderRadius: 10,
                height: 350,
                position: "relative",
                top: -20,
              }}
            />
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}







*/
