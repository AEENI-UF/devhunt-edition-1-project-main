import { Box, Grid, Stack, useMediaQuery, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";
import PartenerCard from "../partenerCard";
import AkataCover from "../../assets/akata.jpg";
import AratoCover from "../../assets/arato.jpg";
import KalibotCover from "../../assets/kalibot.png";
import MahefaCover from "../../assets/mahefa.png";
import WecoursCover from "../../assets/wecours.jpg";

const data = [
  {
    partener: "name",
    description:
      "Per Tellus Turpis Eros Nibh Id Dolor Nulla Vivamus Conubia Malesuada Viverra.",
    cover: AkataCover,
    logo: "",
  },
  {
    partener: "name",
    description:
      "Per Tellus Turpis Eros Nibh Id Dolor Nulla Vivamus Conubia Malesuada Viverra.",
    cover: AratoCover,
    logo: "",
  },
  {
    partener: "name",
    description:
      "Per Tellus Turpis Eros Nibh Id Dolor Nulla Vivamus Conubia Malesuada Viverra.",
    cover: KalibotCover,
    logo: "",
  },
  {
    partener: "name",
    description:
      "Per Tellus Turpis Eros Nibh Id Dolor Nulla Vivamus Conubia Malesuada Viverra.",
    cover: MahefaCover,
    logo: "",
  },
  {
    partener: "name",
    description:
      "Per Tellus Turpis Eros Nibh Id Dolor Nulla Vivamus Conubia Malesuada Viverra.",
    cover: WecoursCover,
    logo: "",
  },
  {
    partener: "name",
    description:
      "Per Tellus Turpis Eros Nibh Id Dolor Nulla Vivamus Conubia Malesuada Viverra.",
    cover: AkataCover,
    logo: "",
  },
  {
    partener: "name",
    description:
      "Per Tellus Turpis Eros Nibh Id Dolor Nulla Vivamus Conubia Malesuada Viverra.",
    cover: KalibotCover,
    logo: "",
  },
  {
    partener: "name",
    description:
      "Per Tellus Turpis Eros Nibh Id Dolor Nulla Vivamus Conubia Malesuada Viverra.",
    cover: MahefaCover,
    logo: "",
  },
  {
    partener: "name",
    description:
      "Per Tellus Turpis Eros Nibh Id Dolor Nulla Vivamus Conubia Malesuada Viverra.",
    cover: AratoCover,
    logo: "",
  },
  {
    partener: "name",
    description:
      "Per Tellus Turpis Eros Nibh Id Dolor Nulla Vivamus Conubia Malesuada Viverra.",
    cover: KalibotCover,
    logo: "",
  },
];

const duration = 200;
const lg = 3;
export default function AnimatedPartenersCard() {
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
            top: "80vh",
            width: "100vw",
            height: "30vh",
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
            border: "dotted",
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
              <PartenerCard key={item.name} item={item} />
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
            {data.map((item) => (
              <PartenerCard key={item.name} item={item} />
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
            {data.map((item) => (
              <PartenerCard key={item.name} item={item} />
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
              <PartenerCard key={item.name} item={item} />
            ))}
          </Stack>
        </Grid>
      </Box>
    </Box>
  );
}
