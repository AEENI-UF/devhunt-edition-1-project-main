import * as React from "react";
import Image from "../../components/Hero/image";
import { Box, Grid, Container } from "@mui/material";
import WordHero from "../../components/Hero/WordHero";
import TheButton from "../../components/Button";
import AOS from "aos";
import "../../../node_modules/aos/dist/aos.css";

AOS.init();
/*
    position: absolute;
    background-size: cover;
    width: 665px;
    height: 1064px;
    top: -83px;
    left: 40px;
    background-image: url(/static/media/Group.0d4c3db….png);
    z-index: 7;

*/
export function ContentHero() {
  return (
    <>
      <Container id="#home">
        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          <Grid container spacing={2}>
            <Grid
              xs={6}
              sx={{ marginTop: "54px" }}
              data-aos="fade-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="6000"
            >
              <WordHero />
              <TheButton />
            </Grid>
            <Grid xs={6}>
              <Image />
            </Grid>
          </Grid>
        </Box>{" "}
      </Container>

      {/* content Responsive */}

      <Box sx={{ display: { xs: "flex", md: "none" } }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Image />
          </Grid>
          <Grid
            item
            xs={12}
            data-aos="fade-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
          >
            <WordHero />
            <TheButton />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
