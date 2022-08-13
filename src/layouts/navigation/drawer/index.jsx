import * as React from "react";
import { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "./use-dimensions";
import { MenuToggle } from "./MenuToggle";
import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Close } from "@mui/icons-material";
import { useTheme } from "@emotion/react";

const container = {
  hide: {
    scale: 0,
  },
  show: {
    scale: 1,
    transition: {
      staggerChildren: 0.2,
      stiffness: 80,
      damping: 50,
    },
  },
};

const item = {
  hide: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const NavDrawer = ({ sections }) => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);
  const theme = useTheme();

  return (
    <>
      <motion.div
        initial={false}
        animate={isOpen ? "open" : "closed"}
        custom={height}
        ref={containerRef}
      >
        <MenuToggle toggle={() => toggleOpen()} />
        <Drawer open={isOpen} anchor="right" onClose={() => toggleOpen()}>
          <motion.div
            variants={container}
            initial="hide"
            animate="show"
            style={{ width: "calc(100vw - 60px)" }}
          >
            <Box my={2.2}>
              <IconButton onClick={() => toggleOpen()}>
                <Close
                  fontSize="medium"
                  htmlColor={theme.palette.primary.main}
                />
              </IconButton>
            </Box>
            <List>
              {sections.map((section) => (
                <ListItemButton
                  component={motion.li}
                  variants={item}
                  key={`w-${section.key}`}
                >
                  <ListItemIcon>{section.icon}</ListItemIcon>
                  <ListItemText> {section.key}</ListItemText>
                </ListItemButton>
              ))}
            </List>
          </motion.div>
        </Drawer>
      </motion.div>
    </>
  );
};

export default NavDrawer;
