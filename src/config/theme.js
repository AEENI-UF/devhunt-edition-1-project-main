import { createTheme } from "@mui/material";
import React from "react";

// #FA03B5
/* const themeOptions = {
  palette: {
    type: "light",
    primary: {
      main: "#03EBFA",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#17FA03",
    },
    background: {
      default: "#fff",
      paper: "#493ed6",
    },
    divider: "rgba(230,221,221,0.12)",
  },
  typography: {
    fontWeightMedium: 500,
    fontWeightBold: 800,
  },
  overrides: {
    MuiButton: {
      root: {
        background: "linear-gradient(45deg, #03EBFA 30%, #17FA03 90%)",
        border: 0,
        borderRadius: 30,
        boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
        color: "black",
        height: 48,
        padding: "20px 35px",
      },
    },
    MuiAppBar: {
      colorInherit: {
        backgroundColor: "#fff",
        color: "#000",
        borderRadius: 40,
      },
    },
  },
  props: {
    MuiAppBar: {
      color: "inherit",
    },
    MuiTooltip: {
      arrow: true,
    },
  },
}; */
// 6c584c
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
