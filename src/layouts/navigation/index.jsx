import { Box, Button, Grid, styled, useTheme } from "@mui/material";
import Typography from "@mui/material/Typography";
import LangSelect from "./components/selectLang";
import { motion, useViewportScroll } from "framer-motion";
import { useEffect, useState } from "react";
import NavDrawer from "./drawer";
import { SwicthComponent } from "./components";
import Aeeni from "../../assets/logo/logo.png";
import AeeniDark from "../../assets/logo/aeeni-light.png";
import { Home } from "@mui/icons-material";

const navStyles = {
  display: "flex",
  position: "fixed",
  alignItems: "center",
  justifyContent: "space-between",
  height: "4rem",
  width: "100vw",
  left: "0",
  zIndex: 99,
  // border: "dotted",
};

const GridFlex = styled(Grid)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
}));

const SECTIONS = [
  {
    key: "Home",
    icon: <Home />,
  },
  {
    key: "Clubs",
    icon: <Home />,
  },
  {
    key: "Events",
    icon: <Home />,
  },
  {
    key: "Parteners",
    icon: <Home />,
  },
  {
    key: "Organism",
    icon: <Home />,
  },
];

const Logo = () => {
  const theme = useTheme();
  return (
    <Box>
      {theme.palette.mode === "light" ? (
        <img src={AeeniDark} alt="" style={{ width: 90, height: 40 }} />
      ) : (
        <img src={Aeeni} alt="" style={{ width: 90, height: 40 }} />
      )}
    </Box>
  );
};

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
        height: { xs: "4rem", md: "4rem" },
        px: { xs: "1rem", lg: "3rem" },
        backgroundColor:
          theme.palette.mode === "light" ? "primary.main" : "white",
      }}
    >
      <Grid container>
        <Grid
          item
          xs={10}
          md={3}
          sx={{ display: "flex", alignItems: "center" /*  border: "dotted" */ }}
        >
          <Logo />
        </Grid>
        <Grid
          container
          item
          md={6}
          sx={{
            display: { xs: "none", md: "flex" },
            // border: "dotted",
            justifyContent: "center",
          }}
        >
          {SECTIONS.map((section) => (
            <Grid
              item
              key={section.key}
              md={2}
              sx={{ display: "flex", alignItems: "center" }}
            >
              <motion.div
                whileHover={
                  {
                    // textShadow: "0 0 4px rgb(5, 255, 251)",
                  }
                }
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
                <Typography
                  sx={{
                    color:
                      theme.palette.mode === "light"
                        ? "white"
                        : theme.palette.primary.main,
                  }}
                >
                  {section.key}
                </Typography>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        <Grid
          container
          item
          md={3}
          sx={{
            display: { xs: "none", md: "flex" },
            // border: "dotted",
            justifyContent: "space-between",
          }}
        >
          <GridFlex>
            <LangSelect />
          </GridFlex>
          <GridFlex item>
            <SwicthComponent />
          </GridFlex>

          <GridFlex item>
            <Button variant="contained" color="secondary">
              Contact us
            </Button>
          </GridFlex>
        </Grid>

        <Grid item xs={2} sx={{ display: { xs: "flex", md: "none" } }}>
          <NavDrawer sections={SECTIONS} />
        </Grid>
      </Grid>
    </Box>
  );
}
