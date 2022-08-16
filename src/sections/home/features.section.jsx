import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import React, { useRef } from "react";
import { useTranslation } from "react-i18next";

// ASSETS
import Communication from "../../assets/images/clubs/cover-c2e.jpg";

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

  const FEATURES = [
    {
      title: t("TITLE_COMUNICATION"),
      content: t("DESCRIPTION_COMMUNICATION"),
      // icon: Comm,
    },
    {
      title: t("TITLE_SALUTARY"),
      content: t("DESCRIPTION_SALUTARY"),
      // icon: Help,
    },
    {
      title: t("TITLE_ACTIVITY"),
      content: t("DESCRIPTION_ACTIVITY"),
      // icon: Activity,
    },
    {
      title: t("TITLE_FINANCE"),
      content: t("DESCRIPTION_FINANCE"),
      // icon: Finance,
    },
  ];
  return (
    <Container sx={{ zIndex: 2 }}>
      <Box
        sx={{
          my: "7rem" /* px: { xs: "1rem", md: "rem" } */,
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        {/* Section title */}
        <Stack
          spacing={3}
          sx={{
            height: "100%",
            textAlign: "center",
            maxWidth: 700,
            mb: 2,
          }}
        >
          <Typography
            variant="h2"
            fontWeight={"bold"}
            color="white"
            // component={motion.h6}
            // variants={item}
            // initial="hide"
            // whileInView={"show"}
            // viewport={viewportConfig}
          >
            {t("TITLE_OBJECTIF")}
          </Typography>
          <Typography
            variant="h5"
            color="white"
            // component={motion.p}
            // variants={item}
            // initial="hide"
            // whileInView="show"
            // viewport={viewportConfig}
          >
            {t("DESCRIPTION_OBJECTIF")}
          </Typography>
        </Stack>

        <Grid container id="features" /* sx={{ border: "dotted" }} */>
          <Grid
            component={motion.div}
            variants={container}
            initial="hide"
            animate="show"
            container
            item
            lg={12}
            ref={scrollRef}
            sx={{ position: "relative", px: { xs: 0, md: 30 } }}
            spacing={2}
          >
            {FEATURES.map((feature, i) => (
              <Grid
                item
                lg={6}
                key={i}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Feature feature={feature} i={i} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

const Feature = ({ feature, i }) => {
  const viewportConfig = {
    margin: "320px",
  };
  const COLORS = ["#00e5ff", "#00f798", "#0021f7", "#f700ce"];
  return (
    <Stack
      component={motion.div}
      variants={item}
      initial="hide"
      whileInView="show"
      spacing={3}
      sx={{
        py: 4,
        width: { xs: "100%", md: "19rem" },
        height: "20rem",
        position: "relative",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          backgroundImage: `url(${Communication})`,
          backgroundSize: "cover",
          filter: "brightness(0.2)",
          borderRadius: 15,
        }}
      ></div>
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: "2.5%",
          backgroundColor: `${COLORS[i]}`,
          filter: "brightness(0.8)",
          borderRadius: 15,
          opacity: 0.6,
        }}
      ></div>
      <Typography
        variant="h4"
        fontWeight="bold"
        color="white"
        sx={{ fontWeight: 25, px: 3 }}
      >
        {feature.title}
      </Typography>
      <Typography
        variant="body1"
        color="white"
        viewport={viewportConfig}
        sx={{ px: 3 }}
      >
        {feature.content}
      </Typography>
    </Stack>
  );
};
