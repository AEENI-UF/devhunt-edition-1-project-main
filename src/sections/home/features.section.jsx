import { Grid, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import React, { useRef } from "react";

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

export function FeatureSection() {
  const scrollRef = useRef(null);
  const viewportConfig = {
    // once: true,
    margin: "320px",
  };

  const FEATURES = [
    {
      title: "Facilité de communication",
      content:
        "Nous facilitons la communication et le partage d'information entre étudiants et enseignements",
    },
    {
      title: "Aide aux Edutiants ",
      content: "Nous aidons les étudiants dans sa vie en étant auprèsd'eux",
    },
    {
      title: "Activités frequentes",
      content:
        "Nous organisons des diverses activites pour hausser le niveau des étudiants",
    },
    {
      title: "Gestion des finances",
      content:
        "Nous gérons la finance au cotés de l'administration de l'établissement",
    },
  ];
  return (
    <Grid container sx={{ my: "7rem", px: { xs: "1rem", md: "8rem" } }}>
      <Grid
        item
        lg={5}
        component={motion.div}
        variants={container}
        initial="hide"
        animate="show"
        display={{ xs: "flex", md: "none" }}
      >
        <Stack
          spacing={3}
          sx={{
            height: "100%",
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="h3"
            fontWeight={"bold"}
            color="text.primary"
            component={motion.h6}
            variants={item}
            initial="hide"
            whileInView={"show"}
            viewport={viewportConfig}
          >
            Quelles sont nos valeurs ?
          </Typography>
          <Typography
            variant="body1"
            color="text.primary"
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
        ref={scrollRef}
      >
        {FEATURES.map((feature, i) => (
          <Grid
            item
            lg={6}
            key={i}
            component={motion.div}
            variants={container}
            initial="hide"
            animate="show"
          >
            <Stack
              component={motion.div}
              spacing={2}
              sx={{
                px: 2,
                py: 4,
                maxWidth: "16rem",
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
                variant="h5"
                fontWeight="bold"
                color="text.primary"
                component={motion.h6}
                variants={item}
                initial="hide"
                whileInView="show"
                viewport={viewportConfig}
                sx={{ fontWeight: 25 }}
              >
                {feature.title}
              </Typography>
              <Typography
                variant="body1"
                color="text.primary"
                component={motion.p}
                variants={item}
                initial="hide"
                whileInView="show"
                viewport={viewportConfig}
              >
                {feature.content}
              </Typography>
            </Stack>
          </Grid>
        ))}
      </Grid>
      <Grid
        item
        lg={5}
        component={motion.div}
        variants={container}
        initial="hide"
        animate="show"
        display={{ xs: "none", md: "flex" }}
      >
        <Stack
          spacing={3}
          sx={{
            height: "100%",
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="h3"
            fontWeight={"bold"}
            color="text.primary"
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
            color="text.primary"
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
    </Grid>
  );
}
