import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Navigation } from "./navigation";
import { Footer } from "./footer";

export function HomeLayout() {
  return (
    <>
      <Navigation />
      <Box /* sx={{ pt: NAVIGATION_HEIGHT }} */>
        <Outlet />
      </Box>
      <Footer />
    </>
  );
}
