import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem, Select, styled, Typography, useTheme } from "@mui/material";
import { changeLanguage } from "i18next";

const WIDTH = "55px";

const FlexBox = styled(motion.div)(({ theme }) => ({
  display: "flex",
  // alignContent: "space-evenly",
  // alignItems: 'center'
}));

export default function LangSelect() {
  const [lang, setlang] = React.useState("Fr");
  const theme = useTheme();
  return (
    <FlexBox>
      <Select
        labelId="select-language"
        id="select-language"
        value={lang}
        onChange={(e) => setlang(e.target.value)}
        sx={{
          "& .MuiSelect-select": {
            color:
              theme.palette.mode === "dark"
                ? theme.palette.primary.main
                : "white",
            border: `1px solid ${
              theme.palette.mode === "dark"
                ? theme.palette.primary.main
                : "white"
            }`,
            width: "30px",
          },
          "& .MuiSvgIcon-root": {
            color:
              theme.palette.mode === "dark"
                ? theme.palette.primary.main
                : "white",
          },
        }}
      >
        <MenuItem value={"Fr"}>Fr</MenuItem>
        <MenuItem value={"Eng"}>Eng</MenuItem>
      </Select>
    </FlexBox>
  );
}
