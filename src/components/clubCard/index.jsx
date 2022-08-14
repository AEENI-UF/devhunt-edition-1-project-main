import { Box, Button, Grid, Stack, styled, Typography } from "@mui/material";
import {
  AnimatePresence,
  AnimateSharedLayout,
  motion,
  useMotionValue,
  useScroll,
} from "framer-motion";
import React, { useState, useRef, useEffect } from "react";

// import Bg from "../../assets/bg3.jpg";

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
      delayChildren: 0.4,
    },
  },
};

export function ClubCard({ club }) {
  const [hovered, setHovered] = useState(false);

  const viewportConfig = {
    once: true,
    margin: "320px",
  };

  const container = {
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const child = {
    hide: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3,
      },
    },
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        height: club.height,
      }}
    >
      <Stack
        spacing={1}
        sx={{
          borderRadius: 5,
          width: "100%",
          overflow: "hidden",
          color: "white",
          position: "relative",
          border: "1px solid #ccc",
        }}
        component={motion.div}
        variants={item}
        initial="hide"
        whileInView="show"
        viewport={viewportConfig}
      >
        <Box
          sx={{
            borderRadius: 5,
            // backgroundColor: "pink",
            boxShadow: "0 5px 8px rgba(0, 0, 0, 0.5)",
            backgroundImage: `url(${club.cover})`,
            height: "100%",
            width: "100%",
            backgroundSize: "cover",
            position: "absolute",
            filter: "brightness(0.5)",
          }}
          component={motion.div}
          whileHover={
            {
              // y: -5,
              // height: `calc(100% + 1.5rem)`,
              // filter: "brightness(0.5)",
            }
          }
          onHoverStart={() => setHovered(true)}
          onHoverEnd={() => setHovered(false)}
        >
          cfcfsdfcsdfcsdfcdsf
        </Box>
      </Stack>
    </Box>
  );
}
