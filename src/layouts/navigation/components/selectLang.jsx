import * as React from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import { useToggle } from "../../../hooks";
import { Menu, Stack, styled, Typography, useTheme } from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { AnimatePresence, motion } from "framer-motion";

const WIDTH = "55px";

const FlexBox = styled(motion.div)(({ theme }) => ({
  // border: "dotted",
  display: "flex",
  alignContent: "space-evenly",
}));
const Item = styled(motion.div)(({ theme }) => ({
  color: theme.palette.primary.main,
  // border: "dotted",
  textAlign: "center",
  width: WIDTH,
}));

const Indicator = styled(motion.div)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  // border: "dotted",
  height: "2px",
  width: WIDTH,
  position: "relative",
  top: 8,
}));

export default function LangSelect() {
  const [lang, setlang] = React.useState("Eng");
  return (
    <FlexBox>
      <Item>
        <Typography onClick={() => setlang("Eng")}>Eng</Typography>
        {lang === "Eng" && <Indicator layoutId="indicator" />}
      </Item>
      <Item onClick={() => setlang("Fr")}>
        <Typography>Fr</Typography>
        {lang === "Fr" && <Indicator layoutId="indicator" />}
      </Item>
    </FlexBox>
  );
}
