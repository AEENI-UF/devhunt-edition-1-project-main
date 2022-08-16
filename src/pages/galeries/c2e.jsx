import { Box, Grid, Stack, Typography } from "@mui/material";
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
    <Box sx={{ width: "100%", height: "30rem" /* border: "dotted" */ }}>
      <Box
        sx={{
          width: "100%",
          height: "10rem",
          backgroundColor: "red",
          display: { xs: "flex", md: "none" },
        }}
      ></Box>
      <Grid container>
        <Grid
          item
          lg={6}
          sx={{
            py: { xs: 2, md: 15 },
            px: { xs: 2, sm: 4, md: 0 },
            pl: { xs: 0, md: 12 },
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "start",
              flexDirection: "column",
              maxWidth: 450,
            }}
          >
            <Typography variant="h1" sx={{ fontSize: { xs: 56, md: 62 } }}>
              Club name
            </Typography>
            <Typography variant="subtitle1">
              Consectetuer Aenean Mauris Ligula Libero Velit. Maximus Facilisis
              Dictum Hendrerit Aptent Non Proin Velit. Consectetuer Aenean
              Mauris Ligula Libero Velit. Maximus Facilisis Dictum Hendrerit
              Aptent Non Proin Velit.
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          lg={6}
          sx={{ position: "relative", display: { xs: "none", md: "flex" } }}
        >
          <Grid container>
            <Grid item lg={6} sx={{ zIndex: 2, p: "5rem 0rem 1rem 3rem" }}>
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
        </Grid>
      </Grid>
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
