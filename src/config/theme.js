import { createTheme } from "@mui/material";
import React from "react";

export const darkTheme = {
  palette: {
    mode: "dark",
    background: {
      default: "#400000",
      paper: "#a66700",
    },
    primary: {
      main: "#980f5a",
    },
    secondary: {
      main: "#750550",
    },
  },
};
export const lightTheme = {
  palette: {
    mode: "light",
    primary: {
      main: "#5d1924",
    },
    secondary: {
      main: "#b31b10",
    },
  },
};

export const ColorModeContext = React.createContext({
  toggleColorMode: () => {},
});
