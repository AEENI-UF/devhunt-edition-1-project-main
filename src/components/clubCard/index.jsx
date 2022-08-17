import { motion, AnimatePresence } from "framer-motion";
import { Box, Typography, Button } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

export const ClubCard = ({ club }) => {
  const [hovered, setHovered] = useState(false);
  const longName = club.name.length >= 34 ? 1 : 0;
  return (
    <>
      {club.logo ? (
        <div style={{ position: "absolute", top: 30, left: 30, zIndex: 2 }}>
          <img
            src={club.logo}
            alt=""
            width={60}
            height={60}
            style={{ borderRadius: "50%" }}
          />
        </div>
      ) : (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            backgroundColor: "#fff",
            top: 30,
            left: 30,
            zIndex: 2,
            width: 60,
            height: 60,
            borderRadius: "50%",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              color: "#000",
            }}
          >
            {club.initial || club.name[0]}
          </Typography>
        </Box>
      )}
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
            y: hovered
              ? longName
                ? -380
                : club.name === "ENI Praise Christ"
                ? -320
                : club.name === "Club d'Entraide de l'ENI"
                ? -310
                : club.name === "English Club based on Practice"
                ? -310
                : -280
              : 100,
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
            {club.name}
            {club.initial && ` - ${club.initial}`}
          </Typography>
        </Box>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.2 } }}
            onHoverStart={() => setHovered(true)}
            onHoverEnd={() => setHovered(false)}
            style={{
              y: -220,
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
              <Link to={`${club.link}#home`} className="link">
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
