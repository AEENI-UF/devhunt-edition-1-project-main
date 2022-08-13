import { Box, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { RenderRoutes, ROUTES } from "./config/routes";
import "./App.css";
import React from "react";
import { ColorModeContext, darkTheme, lightTheme } from "./config/theme";

function App() {
  const [isDark, setDark] = React.useState(false);
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
