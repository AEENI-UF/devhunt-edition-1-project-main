import { Grid, useMediaQuery, useTheme } from "@mui/material";
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
  width: "98vw",
  left: "0",
  zIndex: 9,
};

const SECTIONS = ["Services", "Projects", "Contact"];
export function Navigation() {
  const theme = useTheme();
  const { scrollY } = useViewportScroll();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

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
    <motion.div
      variants={variants}
      animate={hidden ? "hidden" : "visible"}
      transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 0.6 }}
      style={{ ...navStyles, height: isMobile ? "4rem" : "6rem" }}
    >
      <Grid container sx={{ mx: { xs: 1, md: 4 } }}>
        <Grid
          item
          xs={10}
          md={6}
          sx={{ display: "flex", alignItems: "center" }}
        >
          <Typography sx={{ color: theme.palette.primary.main }}>
            Logo
          </Typography>
        </Grid>
        <Grid
          container
          item
          md={6}
          sx={{ display: { xs: "none", md: "flex" } }}
        >
          <Grid item lg={3}>
            <LangSelect />
          </Grid>
          <Grid item lg={2}>
            <SwicthComponent />
          </Grid>
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
        </Grid>
        <Grid item xs={2} sx={{ display: { xs: "flex", md: "none" } }}>
          <NavDrawer />
        </Grid>
      </Grid>
    </motion.div>
  );
}
