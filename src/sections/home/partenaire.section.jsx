import { Box, Button, Grid, Stack, styled, Typography } from "@mui/material";
import { motion, useMotionValue, useScroll, useSpring } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { DomainCard } from "../../components/domainCard";

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
    },
  },
  exit: {
    opacity: 0,
    y: -400,
  },
};

export function ServiceSection() {
  const scrollRef = useRef(null);
  const viewportConfig = {
    // once: true,
    margin: "320px",
  };

  return (
    <Grid container sx={{ my: "7rem", border: "1px solid black", px: "6rem" }}>
      <Grid
        item
        lg={5}
        component={motion.div}
        whileTap={{ scale: 1.5 }}
        variants={container}
        initial="hide"
        animate="show"
      >
        <Stack
          spacing={3}
          sx={{
            // border: "1px solid black",
            height: "100%",
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="h4"
            component={motion.h6}
            variants={item}
            initial="hide"
            whileInView={"show"}
            viewport={viewportConfig}
          >
            Tincidunt Vel Praesent Vehicula Ultricies
          </Typography>
          <Typography
            variant="body1"
            component={motion.p}
            variants={item}
            initial="hide"
            whileInView="show"
            viewport={viewportConfig}
          >
            Egestas Praesent Ex Fames Class Aliquam. Consectetuer Eleifend
            Conubia Suspendisse Enim Nibh Et Dapibus Fusce Pulvinar Maecenas
            Quam.
          </Typography>
        </Stack>
      </Grid>
      <Grid
        component={motion.div}
        variants={container}
        initial="hide"
        animate="show"
        container
        item
        lg={7}
        // sx={{ border: "1px solid black" }}
        rowSpacing={2}
        ref={scrollRef}
      >
        {[1, 2, 3, 4].map((i) => (
          <Grid
            item
            lg={6}
            key={i}
            sx={{ pr: 2 }}
            component={motion.div}
            variants={container}
            initial="hide"
            animate="show"
          >
            <Stack
              component={motion.div}
              spacing={2}
              sx={{
                boxShadow: "0 0 2px rgba(0,0,0,0.2)",
                px: 2,
                py: 4,
                maxWidth: "20rem",
                borderRadius: 3,
              }}
              whileHover={{
                boxShadow: "0 0 8px rgba(0,0,0,0.3)",
              }}
            >
              <motion.div
                variants={item}
                initial="hide"
                whileInView="show"
                viewport={viewportConfig}
                style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                  backgroundColor: "red",
                }}
              ></motion.div>
              <Typography
                variant="h6"
                component={motion.h6}
                variants={item}
                initial="hide"
                whileInView="show"
                viewport={viewportConfig}
              >
                Tincidunt Vel Praesents
              </Typography>
              <Typography
                variant="body1"
                component={motion.p}
                variants={item}
                initial="hide"
                whileInView="show"
                viewport={viewportConfig}
              >
                Pulvinar Posuere Sodales Elementum Mi Sem.
              </Typography>
              <div>
                <Button>Learn more</Button>
              </div>
            </Stack>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}
