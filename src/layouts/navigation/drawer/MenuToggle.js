import * as React from "react";
import { motion } from "framer-motion";
import { useTheme } from "@mui/material";

const Path = (props) => {
  const theme = useTheme();
  return (
    <motion.path
      fill="transparent"
      strokeWidth="3"
      stroke={`${
        theme.palette.mode === "light" ? "white" : theme.palette.secondary.main
      }`}
      strokeLinecap="round"
      {...props}
    />
  );
};

export const MenuToggle = ({ toggle }) => (
  <motion.button
    onClick={toggle}
    style={{
      backgroundColor: "transparent",
      border: "none",
      position: "relative",
      left: 20,
      top: 15,
    }}
  >
    <svg width="23" height="23" viewBox="0 0 23 23">
      <Path
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" },
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" },
        }}
      />
    </svg>
  </motion.button>
);
