import { Box, Button, Grid, Stack, TextField, Typography } from "@mui/material";
import { motion } from "framer-motion";
import React, { useState, useRef } from "react";

const container = {
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hide: {
    opacity: 0,
    y: 400,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};
export default function Footer() {
  const viewportConfig = {
    once: true,
    margin: "320px",
  };
  return (
    <Box mt={"5rem"}>
      <motion.footer
        variants={container}
        initial="hide"
        whileInView="show"
        viewport={viewportConfig}
      >
        <Stack
          height={300}
          justifyContent="space-between"
          sx={{
            backgroundColor: "blue",
            // overflow: "hidden",
            position: "relative",
            width: "98.8vw",
            // left: 10,
            // right: 10,
            height: "50vh",
          }}
          component={motion.div}
          variants={item}
          initial="hide"
          whileInView="show"
          viewport={viewportConfig}
        >
          <div style={{ zIndex: 2 }}>
            <Grid container>
              <Grid item lg={3}>
                <Typography
                  variant="h5"
                  component={motion.h5}
                  variants={item}
                  initial="hide"
                  whileInView="show"
                  viewport={viewportConfig}
                >
                  Brand
                </Typography>
                <Typography
                  variant="h5"
                  component={motion.h5}
                  variants={item}
                  initial="hide"
                  whileInView="show"
                  viewport={viewportConfig}
                >
                  mail@gmail.com
                </Typography>
              </Grid>
              <Grid item lg={6}></Grid>
              <Grid item lg={3}>
                <Box
                  component={motion.div}
                  variants={item}
                  initial="hide"
                  whileInView="show"
                  viewport={viewportConfig}
                >
                  <TextField />
                  <Button>Subscribe</Button>
                </Box>
              </Grid>
            </Grid>
            <Box
              component={motion.div}
              variants={item}
              initial="hide"
              whileInView="show"
              viewport={viewportConfig}
              display="flex"
              justifyContent="center"
            >
              Brand 2022. All right reserved
            </Box>
          </div>
        </Stack>
      </motion.footer>
    </Box>
  );
}
