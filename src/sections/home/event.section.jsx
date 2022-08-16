import * as React from "react";
import { useState } from "react";
import {
  Typography,
  Box,
  Grid,
  Button,
  Container,
  useTheme,
} from "@mui/material";
import Logo1 from "../../assets/images/illustrations/illustration-devhunt.jpg";
import Logo2 from "../../assets/images/illustrations/illustration-rnc.jpg";
import Logo3 from "../../assets/images/illustrations/illustration-algo.jpg";
import Logo4 from "../../assets/images/illustrations/illustration-hi.jpg";
import Logo5 from "../../assets/images/illustrations/illustration-wfnc.jpg";
import { useTranslation } from "react-i18next";
import { ExpandMore, ExpandLess } from "@mui/icons-material";
import AOS from "aos";
import "../../../node_modules/aos/dist/aos.css";

AOS.init();

const Less = <ExpandLess />;
const More = <ExpandMore />;

export function EventSection() {
  const { t } = useTranslation();
  const theme = useTheme();
  const [more, setMore] = useState(true);
  const [resMore, setResMore] = useState(true);

  const ImageTab = [Logo1, Logo2, Logo3, Logo4, Logo5];
  const dateTab = [
    t("DEV_HUNT_ED1_DATE"),
    t("RNC_DATE"),
    t("ALGO_COMPETE_DATE"),
    t("INTERNAL_HACKATHON_HIU_DATE"),
    t("WFNC_ED1_DATE"),
  ];

  const ContentTab = [
    t("DEV_HUNT_ED1_DESCRIPTION"),
    t("RNC_DESCRIPTION"),
    t("ALGO_COMPETE_L1_ED1"),
    t("INTERNAL_HACKATHON_HIU_DESCRIPTION"),
    t("WFNC_ED1_DESCRIPTION"),
  ];

  const TitleContentTab = [
    "DEVHUNT",
    "RNC DESCRIPTION",
    "ALGO COMPETE L1 ED1",
    "HACKATHON INTERNE",
    "WFNC ED1 DESCRIPTION",
  ];

  const HandleMore = (e) => {
    e.preventDefault();
    if (more) setMore(false);
    else setMore(true);
  };

  const HandleResMore = (e) => {
    e.preventDefault();
    if (resMore) setResMore(false);
    else setResMore(true);
  };

  return (
    <>
      <Container id="event"
      sx={{
        py: "0.7rem"
      }}
      >
        <Typography
          variant="h2"
          color="text.primary"
          sx={{
            fontWeight: "bold",
            marginBottom: "43px",
            marginTop: "94px",
            textAlign: { xs: " left", lg: "center" },
          }}
        >
          {t("EVENT_SECTION_TITLE")}
        </Typography>

        <Box
          sx={{ justifyContent: "center", display: { xs: "none", md: "flex" } }}
        >
          <Grid container spacing={6}>
            {[0, 1, 2].map((i) => (
              <>
                <Grid key={i} item xs={4.5}>
                  <img
                    src={ImageTab[i]}
                    style={{
                      objectFit: "cover",
                      width: "350px",
                      height: "220px",
                      borderRadius: "13px",
                      boxShadow: `2px 3px 3px 3px ${
                        theme.palette.mode === "light"
                          ? "#eaeaea"
                          : "rgba(0, 0, 0, 0.309)"
                      }`,
                    }}
                    data-aos="fade-right"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="6000"
                    alt=""
                  />
                </Grid>
                <Grid
                  item
                  xs={7}
                  data-aos="fade-left"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="6000"
                >
                  <Box sx={{ height: "100%", paddingRight: "10vw" }}>
                    <Typography
                      variant="h6"
                      color="text.primary"
                      style={{ fontWeight: "bold", marginBottom: "12px" }}
                    >
                      {TitleContentTab[i]}
                    </Typography>
                    <Typography variant="subtitle1" color="text.primary">
                      {ContentTab[i]}
                    </Typography>
                    <Typography
                      style={{ marginTop: "20px" }}
                      variant="subtitle1"
                      color="text.primary"
                    >
                      {dateTab[i]}
                    </Typography>
                  </Box>

                  {/* spacing */}
                  <hr style={{ color: "#eaeaea" }} />
                </Grid>
              </>
            ))}
          </Grid>
        </Box>

        <Box sx={more && { display: "none" }}>
          <Grid
            container
            spacing={6}
            sx={{ display: { xs: "none", md: "flex" }, marginTop: "36px" }}
          >
            {[3, 4].map((i) => (
              <>
                <Grid
                  key={i}
                  item
                  xs={5}
                  data-aos="fade-up"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="1000"
                >
                  <img
                    src={ImageTab[i]}
                    style={{
                      width: "25vw",
                      objectFit: "cover",
                      height: "200px",
                      borderRadius: "13px",
                      boxShadow: `2px 3px 3px 3px ${
                        theme.palette.mode === "light"
                          ? "#eaeaea"
                          : "rgba(0, 0, 0, 0.309)"
                      }`,
                    }}
                    alt=""
                  />
                </Grid>
                <Grid
                  item
                  xs={7}
                  data-aos="fade-left"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="1000"
                >
                  <Box sx={{ height: "100%" }}>
                    <Typography
                      variant="h6"
                      color="text.primary"
                      style={{ fontWeight: "bold", marginBottom: "12px" }}
                    >
                      {TitleContentTab[i]}
                    </Typography>
                    <Typography variant="subtitle1" color="text.primary">
                      {ContentTab[i]}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      style={{ marginTop: "20px" }}
                      color="text.primary"
                    >
                      {dateTab[i]}
                    </Typography>
                  </Box>

                  <hr style={{ color: "#eaeaea" }} />
                </Grid>
              </>
            ))}
          </Grid>
        </Box>

        <Button
          variant="contained"
          sx={{
            marginLeft: "80%",
            marginTop: "70px",
            marginBottom: "45px",
            display: { xs: "none", md: "flex" },
            backgroundColor: "primary.main",
            padding: "13px",
          }}
          onClick={HandleMore}
          endIcon={more ? More : Less}
        >
          {more ? t("SHOW_MORE_EVENT") : t("SHOW_LESS_EVENT")}
        </Button>

        {/* content more */}
      </Container>

      {/* Responsive */}

      <Box
        sx={{ display: { xs: "flex", md: "none" } }}
        data-aos="zoom-in"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="6000"
      >
        <Grid container spacing={3}>
          {[0, 1, 2].map((i) => (
            <>
              <Grid key={i} item xs={12}>
                <img
                  alt="description"
                  style={{
                    width: "100%",
                    height: "80vw",
                    borderRadius: "13px",
                    objectFit: "cover",
                  }}
                  src={ImageTab[i]}
                />
              </Grid>
              <Grid
                item
                xs={12}
                sx={{ paddinBottom: "32px", paddingLeft: "10%" }}
              >
                <Typography
                  variant="h6"
                  color="text.primary"
                  style={{
                    fontWeight: "bold",
                    marginBottom: "12px",
                    marginLeft: "23px",
                  }}
                >
                  {TitleContentTab[i]}
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.primary"
                  style={{ marginBottom: "12px", marginLeft: "23px" }}
                >
                  {ContentTab[i]}
                </Typography>
                <Typography
                  variant="subtitle1"
                  style={{ marginTop: "20px", marginLeft: "23px" }}
                  color="text.primary"
                >
                  {dateTab[i]}
                </Typography>
              </Grid>
            </>
          ))}
        </Grid>
      </Box>

      <Box sx={resMore && { display: "none" }} style={{ marginTop: "43px" }}>
        <Grid container spacing={3}>
          {[3, 4].map((i) => (
            <>
              <Grid key={i} item xs={12}>
                <img
                  alt="description"
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "13px",
                    objectFit: "cover",
                  }}
                  src={ImageTab[i]}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography
                  variant="h6"
                  color="text.primary"
                  sx={{
                    fontWeight: "bold",
                    marginBottom: "12px",
                    marginLeft: "23px",
                  }}
                >
                  {TitleContentTab[i]}
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.primary"
                  style={{ marginBottom: "12px", marginLeft: "23px" }}
                >
                  {ContentTab[i]}
                </Typography>
                <Typography
                  variant="subtitle1"
                  style={{ marginTop: "20px", marginLeft: "23px" }}
                  color="text.primary"
                >
                  {dateTab[i]}
                </Typography>
              </Grid>
            </>
          ))}
        </Grid>
      </Box>

      <Button
        variant="contained"
        sx={{
          display: { xs: "flex", md: "none" },
          marginLeft: "18px",
          marginTop: "18px",
          backgroundColor: "primary.main",
        }}
        onClick={HandleResMore}
        endIcon={resMore ? More : Less}
      >
        {resMore ? t("SHOW_MORE_EVENT") : t("SHOW_LESS_EVENT")}
      </Button>
    </>
  );
}
