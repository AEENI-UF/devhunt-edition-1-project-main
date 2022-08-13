import * as React from "react";
import { motion } from "framer-motion";
import { styled, Typography } from "@mui/material";

const WIDTH = "55px";

const FlexBox = styled(motion.div)(({ theme }) => ({
  // border: "dotted",
  display: "flex",
  // alignContent: "space-evenly",
  // alignItems: 'center'
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
