import { Box, Grid, Stack, Typography, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import React, { useRef } from "react";
import Comm from "../../assets/comm.png";
import Finance from "../../assets/FINANCE.png";
import Help from "../../assets/help.png";
import Activity from "../../assets/acticity.png";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();
  const theme = useTheme();
  const scrollRef = useRef(null);
  const viewportConfig = {
    margin: "320px",
  };

  const FEATURES = [
    {
      title: t("TITLE_COMUNICATION"),
      content: t("DESCRIPTION_COMMUNICATION"),
      icon: Comm,
    },
    {
      title: t("TITLE_SALUTARY"),
      content: t("DESCRIPTION_SALUTARY"),
      icon: Help,
    },
    {
      title: t("TITLE_ACTIVITY"),
      content: t("DESCRIPTION_ACTIVITY"),
      icon: Activity,
    },
    {
      title: t("TITLE_FINANCE"),
      content: t("DESCRIPTION_FINANCE"),
      icon: Finance,
    },
  ];
  return (
    <Grid
      container
      sx={{ my: "7rem", px: { xs: "1rem", md: "8rem" } }}
      id="features"
    >
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
        style={{ position: "relative" }}
      >
        <Box
          id="hero-element-design-2"
          sx={{
            bgcolor: `${
              theme.palette.mode === "light" ? "#ffc2ccc7" : "#e6074fbf"
            }`,
          }}
        ></Box>
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
              <motion.img
                src={feature.icon}
                variants={item}
                initial="hide"
                whileInView="show"
                viewport={viewportConfig}
                alt=""
                style={{ width: "80px", height: "80px" }}
              />
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
            alignItems: "start",
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
            {t("TITLE_OBJECTIF")}
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
            {t("DESCRIPTION_OBJECTIF")}
          </Typography>
        </Stack>
      </Grid>
    </Grid>
  );
}
