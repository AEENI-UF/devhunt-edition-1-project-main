import { Box, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { RenderRoutes, ROUTES } from "./config/routes";
import "./App.css";
import React from "react";
import { ColorModeContext, darkTheme, lightTheme } from "./config/theme";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import resources from "./lang";

i18n.use(initReactI18next).init({
  resources,
  lng: "fr",
  fallbackLng: "fr",
});

function App() {
  const [isDark, setDark] = React.useState(true);
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setDark((prevMode) => !prevMode);
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        ...(isDark ? darkTheme : lightTheme),
      }),
    [isDark]
  );
  return (
    <ColorModeContext.Provider value={colorMode}>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Box sx={{ backgroundColor: "background.default" }}>
          <RenderRoutes routes={ROUTES} />
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
