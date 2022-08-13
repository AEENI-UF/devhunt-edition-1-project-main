import { Box, Grid, Stack, useMediaQuery, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";
import PartenaireCard from "../parterCard";

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
          backgroundImage: "linear-gradient(#fff,#fff 40%,rgba(255,255,255,0))",
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
            backgroundImage: "linear-gradient(rgba(255,255,255,0),#fff)",
            zIndex: 2,
          }}
        ></Box>
        <Grid
          container
          sx={{
            width: "100vw",
            height: "200vh",
            px: { xs: 0, sm: 5, md: 15, lg: 15 },
            overflow: "hidden",
            position: "absolute",
          }}
        >
          <Grid
            item
            xs={6}
            sm={4}
            lg={lg}
            justifyContent="center"
            display="flex"
          >
            <Stack
              component={motion.div}
              spacing={2}
              animate={{
                rotateX: 30,
                y: [0, -1500, 0],
                transition: {
                  repeat: Infinity,
                  duration,
                  type: "just",
                },
              }}
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((item) => (
                <PartenaireCard key={item} />
              ))}
            </Stack>
          </Grid>
          <Grid
            item
            xs={6}
            sm={4}
            lg={lg}
            justifyContent="center"
            display="flex"
          >
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
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((item) => (
                <PartenaireCard key={item} />
              ))}
            </Stack>
          </Grid>
          <Grid
            item
            sm={4}
            lg={lg}
            justifyContent="center"
            display={{ xs: "none", sm: "flex" }}
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
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((item) => (
                <PartenaireCard key={item} />
              ))}
            </Stack>
          </Grid>
          <Grid
            item
            lg={lg}
            justifyContent="center"
            display={{ xs: "none", md: "flex" }}
          >
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
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((item) => (
                <PartenaireCard key={item} />
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
