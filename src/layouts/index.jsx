import { Box, Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Navigation, NAVIGATION_HEIGHT } from "./navigation";
import Footer from "./footer";

export function HomeLayout() {
  return (
    <>
      <Navigation />
      <Box /* sx={{ pt: NAVIGATION_HEIGHT }} */>
        <Outlet />
      </Box>
      {/* <Footer /> */}
    </>
  );
}
