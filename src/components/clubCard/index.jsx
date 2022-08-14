import Bg from "../../assets/akata.jpg";
import { motion, AnimatePresence } from "framer-motion";
import { Box, Typography, Button } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

export const ClubCard = ({ index, club }) => {
  const [hovered, setHovered] = useState(false);
  const longName = club.name.length >= 30 ? 1 : 0;
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
          scale: hovered ? 1.05 : 1,
          filter: hovered ? "brightness(0.2) blur(1px)" : null,
        }}
        onTap={() => setHovered(!hovered)}
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
      ></Box>
      <AnimatePresence>
        <Box
          component={motion.div}
          initial={{ y: -100 }}
          animate={{
            y: hovered ? (longName ? -340 : -260) : 100,
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
          <Typography variant="h4" color="white" sx={{ textAlign: "start" }}>
            {club.name} - {club.initial}
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
            <Typography variant="body" color="white">
              {club.description}
            </Typography>
            <div style={{ position: "relative", top: 15 }}>
              <Link to={club.link} className="link">
                <Button variant="contained" color="secondary">
                  View more
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
