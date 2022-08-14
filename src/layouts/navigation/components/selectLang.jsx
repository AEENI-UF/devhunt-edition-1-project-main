import * as React from "react";
import { motion } from "framer-motion";
import { styled, Typography } from "@mui/material";
import { changeLanguage } from "i18next";

const WIDTH = "55px";

const FlexBox = styled(motion.div)(({ theme }) => ({
  // border: "dotted",
  display: "flex",
  // alignContent: "space-evenly",
  // alignItems: 'center'
}));
const Item = styled(motion.div)(({ theme }) => ({
  color: theme.palette.mode === "light" ? "white" : theme.palette.primary.main,
  // border: "dotted",
  textAlign: "center",
  width: WIDTH,
}));

const Indicator = styled(motion.div)(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "light" ? "white" : theme.palette.primary.main,
  // border: "dotted",
  height: "2px",
  width: WIDTH,
  position: "relative",
  top: 8,
}));

export default function LangSelect() {
  const [lang, setlang] = React.useState("fr");
  return (
    <FlexBox>
      <Item>
        <Typography
          onClick={() => {
            setlang("en");
            changeLanguage("en");
          }}
        >
          Eng
        </Typography>
        {lang === "en" && <Indicator layoutId="indicator" />}
      </Item>
      <Item
        onClick={() => {
          setlang("fr");
          changeLanguage("fr");
        }}
      >
        <Typography>Fr</Typography>
        {lang === "fr" && <Indicator layoutId="indicator" />}
      </Item>
    </FlexBox>
  );
}
