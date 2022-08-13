import { Box, Button, Grid, useMediaQuery, useTheme } from "@mui/material";
import Typography from "@mui/material/Typography";
import LangSelect from "./components/selectLang";
import { motion, useViewportScroll } from "framer-motion";
import { useEffect, useState } from "react";
import NavDrawer from "./drawer";
import { SwicthComponent } from "./components";

const navStyles = {
  display: "flex",
  position: "fixed",
  alignItems: "center",
  justifyContent: "space-between",
  height: "6rem",
  width: "100vw",
  left: "0",
  zIndex: 99,
};

const SECTIONS = ["Services", "Projects", "Contact"];
export function Navigation() {
  const { scrollY } = useViewportScroll();
  const theme = useTheme();

  const [hidden, setHidden] = useState(false);

  function update() {
    if (scrollY?.current < scrollY?.prev) {
      setHidden(false);
    } else if (scrollY?.current > 100 && scrollY?.current > scrollY?.prev) {
      setHidden(true);
    }
  }

  const variants = {
    /** this is the "visible" key and it's correlating styles **/
    visible: { opacity: 1, y: 0 },
    /** this is the "hidden" key and it's correlating styles **/
    hidden: { opacity: 0, y: -25 },
  };

  useEffect(() => {
    return scrollY.onChange(() => update());
  });

  return (
    <Box
      component={motion.div}
      variants={variants}
      animate={hidden ? "hidden" : "visible"}
      transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 0.6 }}
      sx={{
        ...navStyles,
        height: { xs: "4rem", md: "6rem" },
        px: { sx: 0, lg: "3rem" },
      }}
    >
      <Grid container sx={{}}>
        <Grid
          item
          xs={10}
          md={3}
          sx={{ display: "flex", alignItems: "center", border: "dotted" }}
        >
          <Typography sx={{ color: theme.palette.primary.main }}>
            Logo
          </Typography>
        </Grid>
        <Grid
          container
          item
          md={6}
          sx={{
            display: { xs: "none", md: "flex" },
            border: "dotted",
            justifyContent: "center",
          }}
        >
          {SECTIONS.map((section) => (
            <Grid item key={section} md={2} textAlign="center">
              <motion.div
                whileHover={{
                  textShadow: "0 0 4px rgb(5, 255, 251)",
                }}
                whileTap={{
                  scale: 2.5,
                  opacity: 0,
                  transition: {
                    delay: 0,
                    duration: 0.2,
                    velocity: 10,
                  },
                }}
              >
                <Typography sx={{ color: theme.palette.primary.main }}>
                  {section}
                </Typography>
              </motion.div>
            </Grid>
          ))}
          <Grid item>
            <LangSelect />
          </Grid>
        </Grid>

        <Grid
          container
          item
          md={3}
          sx={{
            display: { xs: "none", md: "flex" },
            border: "dotted",
            justifyContent: "flex-end",
          }}
        >
          <Grid item>
            <SwicthComponent />
          </Grid>

          <Grid item sx={{ ml: 5 }}>
            <Button>Contact us</Button>
          </Grid>
        </Grid>

        <Grid item xs={2} sx={{ display: { xs: "flex", md: "none" } }}>
          <NavDrawer />
        </Grid>
      </Grid>
    </Box>
  );
}
