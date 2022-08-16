import { Box, Grid, Stack, useMediaQuery, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";
import PartnerCard from "../partnerCard";
import AkataCover from "../../assets/images/illustrations/illustration-akata.jpg";
import AratoCover from "../../assets/images/illustrations/illustration-arato.jpg";
import KalibotCover from "../../assets/images/illustrations/illustration-kalibot.png";
import MahefaCover from "../../assets/images/illustrations/illustration-mahefa.png";
import WecoursCover from "../../assets/images/illustrations/illustration-wecours.jpg";

const data = [
  {
    partner: "Akata",
    description:
      "Per Tellus Turpis Eros Nibh Id Dolor Nulla Vivamus Conubia Malesuada Viverra.",
    cover: AkataCover,
    logo: "",
  },

  {
    partner: "WeCours",
    description:
      "Per Tellus Turpis Eros Nibh Id Dolor Nulla Vivamus Conubia Malesuada Viverra.",
    cover: WecoursCover,
    logo: "",
  },
  {
    partner: "Kalibot",
    description:
      "Per Tellus Turpis Eros Nibh Id Dolor Nulla Vivamus Conubia Malesuada Viverra.",
    cover: KalibotCover,
    logo: "",
  },
  {
    partner: "AkataCover",
    description:
      "Per Tellus Turpis Eros Nibh Id Dolor Nulla Vivamus Conubia Malesuada Viverra.",
    cover: AkataCover,
    logo: "",
  },
  {
    partner: "Mahefa Numeric",
    description:
      "Per Tellus Turpis Eros Nibh Id Dolor Nulla Vivamus Conubia Malesuada Viverra.",
    cover: MahefaCover,
    logo: "",
  },
  {
    partner: "Arato",
    description:
      "Per Tellus Turpis Eros Nibh Id Dolor Nulla Vivamus Conubia Malesuada Viverra.",
    cover: AratoCover,
    logo: "",
  },
  {
    partner: "Kalibot",
    description:
      "Per Tellus Turpis Eros Nibh Id Dolor Nulla Vivamus Conubia Malesuada Viverra.",
    cover: KalibotCover,
    logo: "",
  },
  {
    partner: "Arato",
    description:
      "Per Tellus Turpis Eros Nibh Id Dolor Nulla Vivamus Conubia Malesuada Viverra.",
    cover: AratoCover,
    logo: "",
  },
  {
    partner: "Mahefa Numeric",
    description:
      "Per Tellus Turpis Eros Nibh Id Dolor Nulla Vivamus Conubia Malesuada Viverra.",
    cover: MahefaCover,
    logo: "",
  },

  {
    partner: "Kalibot",
    description:
      "Per Tellus Turpis Eros Nibh Id Dolor Nulla Vivamus Conubia Malesuada Viverra.",
    cover: KalibotCover,
    logo: "",
  },
];

const data2 = [
  {
    partner: "Akata",
    description:
      "Per Tellus Turpis Eros Nibh Id Dolor Nulla Vivamus Conubia Malesuada Viverra.",
    cover: AkataCover,
    logo: "",
  },
  {
    partner: "Arato",
    description:
      "Per Tellus Turpis Eros Nibh Id Dolor Nulla Vivamus Conubia Malesuada Viverra.",
    cover: AratoCover,
    logo: "",
  },
  {
    partner: "WeCours",
    description:
      "Per Tellus Turpis Eros Nibh Id Dolor Nulla Vivamus Conubia Malesuada Viverra.",
    cover: WecoursCover,
    logo: "",
  },
  {
    partner: "Mahefa Numeric",
    description:
      "Per Tellus Turpis Eros Nibh Id Dolor Nulla Vivamus Conubia Malesuada Viverra.",
    cover: MahefaCover,
    logo: "",
  },
  {
    partner: "Kalibot",
    description:
      "Per Tellus Turpis Eros Nibh Id Dolor Nulla Vivamus Conubia Malesuada Viverra.",
    cover: KalibotCover,
    logo: "",
  },
  {
    partner: "AkataCover",
    description:
      "Per Tellus Turpis Eros Nibh Id Dolor Nulla Vivamus Conubia Malesuada Viverra.",
    cover: AkataCover,
    logo: "",
  },
  {
    partner: "Kalibot",
    description:
      "Per Tellus Turpis Eros Nibh Id Dolor Nulla Vivamus Conubia Malesuada Viverra.",
    cover: KalibotCover,
    logo: "",
  },
  {
    partner: "Mahefa Numeric",
    description:
      "Per Tellus Turpis Eros Nibh Id Dolor Nulla Vivamus Conubia Malesuada Viverra.",
    cover: MahefaCover,
    logo: "",
  },
  {
    partner: "Arato",
    description:
      "Per Tellus Turpis Eros Nibh Id Dolor Nulla Vivamus Conubia Malesuada Viverra.",
    cover: AratoCover,
    logo: "",
  },
  {
    partner: "Kalibot",
    description:
      "Per Tellus Turpis Eros Nibh Id Dolor Nulla Vivamus Conubia Malesuada Viverra.",
    cover: KalibotCover,
    logo: "",
  },
];

const data3 = [
  {
    partner: "Akata",
    description:
      "Per Tellus Turpis Eros Nibh Id Dolor Nulla Vivamus Conubia Malesuada Viverra.",
    cover: AkataCover,
    logo: "",
  },

  {
    partner: "Mahefa Numeric",
    description:
      "Per Tellus Turpis Eros Nibh Id Dolor Nulla Vivamus Conubia Malesuada Viverra.",
    cover: MahefaCover,
    logo: "",
  },
  {
    partner: "Arato",
    description:
      "Per Tellus Turpis Eros Nibh Id Dolor Nulla Vivamus Conubia Malesuada Viverra.",
    cover: AratoCover,
    logo: "",
  },
  {
    partner: "WECours",
    description:
      "Per Tellus Turpis Eros Nibh Id Dolor Nulla Vivamus Conubia Malesuada Viverra.",
    cover: WecoursCover,
    logo: "",
  },
  {
    partner: "Kalibot",
    description:
      "Per Tellus Turpis Eros Nibh Id Dolor Nulla Vivamus Conubia Malesuada Viverra.",
    cover: KalibotCover,
    logo: "",
  },

  {
    partner: "Mahefa Numeric",
    description:
      "Per Tellus Turpis Eros Nibh Id Dolor Nulla Vivamus Conubia Malesuada Viverra.",
    cover: MahefaCover,
    logo: "",
  },
  {
    partner: "Arato",
    description:
      "Per Tellus Turpis Eros Nibh Id Dolor Nulla Vivamus Conubia Malesuada Viverra.",
    cover: AratoCover,
    logo: "",
  },
  {
    partner: "AkataCover",
    description:
      "Per Tellus Turpis Eros Nibh Id Dolor Nulla Vivamus Conubia Malesuada Viverra.",
    cover: AkataCover,
    logo: "",
  },
  {
    partner: "Kalibot",
    description:
      "Per Tellus Turpis Eros Nibh Id Dolor Nulla Vivamus Conubia Malesuada Viverra.",
    cover: KalibotCover,
    logo: "",
  },
  {
    partner: "Kalibot",
    description:
      "Per Tellus Turpis Eros Nibh Id Dolor Nulla Vivamus Conubia Malesuada Viverra.",
    cover: KalibotCover,
    logo: "",
  },
];

const duration = 200;
export function AnimatedPartners() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const keyframes = isMobile ? [-1000, 0, -1000] : [-1500, 0, -1500];
  return (
    <Box
      sx={{
        position: "relative",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "-5vh",
          width: "100vw",
          height: "30vh",
          zIndex: 2,
          backgroundImage: `linear-gradient(${theme.palette.background.default},${theme.palette.background.default} 40%,rgba(255,255,255,0))`,
        }}
      ></Box>
      <Box
        sx={{
          width: "100vw",
          height: "90vh",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "76vh",
            width: "100vw",
            height: "15vh",
            // border: "white dotted",
            backgroundImage: `linear-gradient(rgba(255,255,255,0),${theme.palette.background.default})`,
            zIndex: 2,
          }}
        ></Box>
        <Grid
          container
          sx={{
            width: "100vw",
            height: "200vh",
            overflow: "hidden",
            position: "absolute",
            // border: "dotted",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Stack
            component={motion.div}
            spacing={2}
            animate={{
              y: [0, -1500, 0],
              transition: {
                repeat: Infinity,
                duration,
                type: "just",
              },
            }}
            sx={{ mr: { sm: 2, lg: 2 }, ml: { xs: 1, sm: 0 } }}
          >
            {data.map((item) => (
              <PartnerCard key={item.name} item={item} />
            ))}
          </Stack>
          <Stack
            component={motion.div}
            spacing={2}
            initial={{ y: 0 }}
            animate={{
              y: keyframes,
              transition: {
                repeat: Infinity,
                duration,
                type: "just",
              },
            }}
            sx={{
              mr: { md: 2, lg: 2 },
              display: { xs: "none", sm: "flex" },
            }}
          >
            {data2.map((item) => (
              <PartnerCard key={item.name} item={item} />
            ))}
          </Stack>
          <Stack
            component={motion.div}
            spacing={2}
            animate={{
              y: [0, -1500, 0],
              transition: {
                repeat: Infinity,
                duration,
                type: "just",
              },
            }}
            sx={{ mr: { sm: 2, lg: 2 }, display: { xs: "none", md: "flex" } }}
          >
            {data3.map((item) => (
              <PartnerCard key={item.name} item={item} />
            ))}
          </Stack>
          <Stack
            component={motion.div}
            spacing={2}
            initial={{ y: 0 }}
            animate={{
              y: keyframes,
              transition: {
                repeat: Infinity,
                duration,
                type: "just",
              },
            }}
            sx={{ mr: { lg: 2 }, display: { xs: "none", lg: "flex" } }}
          >
            {data.map((item) => (
              <PartnerCard key={item.name} item={item} />
            ))}
          </Stack>
        </Grid>
      </Box>
    </Box>
  );
}
