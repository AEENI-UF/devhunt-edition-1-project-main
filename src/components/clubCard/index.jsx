import Bg from "../../assets/akata.jpg";
import { motion, AnimatePresence } from "framer-motion";
import { Box, Typography, Button } from "@mui/material";
import { useState } from "react";

export const ClubCard = ({ index, club }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <>
      <div style={{ position: "absolute", top: 30, left: 30, zIndex: 2 }}>
        <img
          src={club.logo}
          alt=""
          width={60}
          height={60}
          style={{ borderRadius: "50%" }}
        />
      </div>
      <Box
        component={motion.div}
        sx={{
          backgroundImage: `url(${club.cover})`,
          height: "110%",
          backgroundSize: "cover",
          filter: "brightness(0.5)",
          position: "relative",
          textAlign: "left",
          padding: "0 1rem",
        }}
        style={{
          scale: hovered ? 1.15 : 1,
          filter: hovered ? "brightness(0.5) blur(1px)" : null,
        }}
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
      ></Box>
      <AnimatePresence>
        <Box
          component={motion.div}
          initial={{ y: -100 }}
          animate={{
            y: hovered ? -260 : 100,
            transition: {
              stiffness: 20,
            },
          }}
          onHoverStart={() => setHovered(true)}
          onHoverEnd={() => setHovered(false)}
          exit={{
            y: "600%",
          }}
          style={{ zIndex: 2, position: "absolute", padding: "0 1rem" }}
        >
          <Typography variant="h3" color="white">
            Club name
          </Typography>
        </Box>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.2 } }}
            onHoverStart={() => setHovered(true)}
            onHoverEnd={() => setHovered(false)}
            style={{
              y: -200,
              zIndex: 2,
              position: "absolute",
              textAlign: "left",
              padding: "0 1rem",
            }}
          >
            <Typography variant="body" sx={{ mb: 2 }} color="white">
              Donec Consequat Nam Curabitur Sollicitudin Nisl Non Taciti Mauris
              Inceptos Potenti Nostra Imperdiet Cubilia Tempor Orci
            </Typography>
            <div>
              <Button>Hello</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
