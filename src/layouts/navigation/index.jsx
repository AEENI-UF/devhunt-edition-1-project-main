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
import { AppBar, Toolbar } from "@mui/material";

export const NAVIGATION_HEIGHT = "4rem";

const GridFlex = styled(Grid)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  marginRight: 10,
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
    } else if (scrollY?.current > 150 && scrollY?.current > scrollY?.prev) {
      setHidden(false);
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
    <AppBar
      component={motion.div}
      variant="elevation"
      position="sticky"
      variants={variants}
      animate={hidden ? "hidden" : "visible"}
      transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 0.6 }}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        top: 0,
        zIndex: 99,
        height: NAVIGATION_HEIGHT,
        px: { xs: "1rem", lg: "3rem" },
        backgroundColor:
          theme.palette.mode === "light" ? "primary.main" : "white",
      }}
    >
      <Toolbar sx={{ width: "100%" }}>
        <Grid container>
          <Grid
            item
            xs={10}
            md={3}
            sx={{
              display: "flex",
              alignItems: "center",
              // border: "dotted",
            }}
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
              <Button key={section.key} component={motion.button}>
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
              </Button>
            ))}
          </Grid>

          <Grid
            container
            item
            md={3}
            sx={{
              display: { xs: "none", md: "flex" },
              // border: "dotted",
              justifyContent: "end",
            }}
          >
            <GridFlex>
              {/* <LangSelect /> */}
              ENg
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
      </Toolbar>
    </AppBar>
  );
}
<Box></Box>;
