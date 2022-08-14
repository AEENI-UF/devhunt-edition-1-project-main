import * as React from "react";
import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { Close, Menu } from "@mui/icons-material";
import { useTheme } from "@emotion/react";
import { SwicthComponent } from "../components";
import { useCycle } from "framer-motion";
import LangSelect from "../components/selectLang";

const container = {
  show: {
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
  const theme = useTheme();

  return (
    <div>
      <IconButton
        onClick={() => toggleOpen()}
        sx={{ position: "relative", top: 5, left: 10 }}
      >
        <Menu
          htmlColor={
            theme.palette.mode === "light"
              ? "white"
              : theme.palette.secondary.main
          }
          fontSize="large"
        />
      </IconButton>
      <Drawer open={isOpen} anchor="top" onClose={() => toggleOpen()}>
        <Box sx={{ height: "80vh", p: 3 }}>
          <Box display="flex" justifyContent="end">
            <IconButton onClick={() => toggleOpen()}>
              <Close fontSize="medium" htmlColor={theme.palette.primary.main} />
            </IconButton>
          </Box>
          <List>
            {sections.map((section) => (
              <ListItemButton key={`w-${section.key}`}>
                <ListItemText> {section.key}</ListItemText>
              </ListItemButton>
            ))}
            <ListItem>
              <ListItemText>Dark mode</ListItemText>
              <SwicthComponent />
            </ListItem>
            <ListItem>
              <ListItemText>Choose a language</ListItemText>
              <LangSelect />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </div>
  );
};

export default NavDrawer;
