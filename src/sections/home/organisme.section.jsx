import {
  Box,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
  Container,
  Grid,
} from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

import PROFILE_PRESIDENT from "../../assets/images/profiles/profile-rosa.jpg";
import PROFILE_ELDINOH from "../../assets/images/profiles/profile-eldinoh-laurice.jpg";
import PROFILE_PRISCA from "../../assets/images/profiles/profile-prisca-tiana.jpg";
import PROFILE_NIAIKO from "../../assets/images/profiles/profile-niaiko-ralaivao.jpg";
import PROFILE_NOROFANEVA from "../../assets/images/profiles/profile-norofaneva.jpg";

export function OrganismSection() {
  const { t } = useTranslation();
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  const MEMBERS = [
    {
      name: "Ralinirina Rosa Elysabeth",
      post: t("PRESIDENT"),
      url: PROFILE_PRESIDENT,
    },
    {
      name: "Rafanomezantsoa Eldinoh Laurice",
      post: t("COMPETITION_MANAGER"),
      url: PROFILE_ELDINOH,
    },
    {
      name: "Rakotozafy Prisca Tiana",
      post: t("FINANCIAL_CONTROLLER"),
      url: PROFILE_PRISCA,
    },
    {
      name: "Ralaivao Niaiko Michaël",
      post: t("COMPETITION_MANAGER"),
      url: PROFILE_NIAIKO,
    },
    {
      name: "Rakotomanana Norofaneva Miarimbola",
      post: t("TREASURER"),
      url: PROFILE_NOROFANEVA,
    },
  ];

  const variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  };

  return (
    <Box
      sx={{
        py: "6rem",
      }}
      id="organism"
    >
      <Container>
        <Typography
          variant="h2"
          color="text.primary"
          fontWeight={"bold"}
          sx={{
            textAlign: "center",
            mb: 10,
          }}
        >
          {t("ORGANISM_SECTION_TITLE")}
        </Typography>

        {isMobile ? (
          <Box>
            <Grid
              container
              justifyContent="center"
              sx={{
                gap: 15,
              }}
            >
              {MEMBERS.map((member, i) => {
                return (
                  <Grid
                    component={motion.div}
                    variants={variants}
                    initial={{
                      opacity: 0,
                      y: 100,
                      scale: 0.9,
                    }}
                    whileInView={{
                      y: 0,
                      opacity: 1,
                      scale: 1,
                      once: true,
                    }}
                    whileHover={{
                      scale: 1.05,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                    item
                    xs={12}
                    md={5}
                    sx={{
                      border: "1px solid",
                      borderColor:
                        theme.palette.mode === "dark"
                          ? "#fff"
                          : "secondary.main",
                      borderRadius: "1rem",
                      backgroundColor:
                        theme.palette.mode === "dark"
                          ? "#fff"
                          : "secondary.main",
                      color: theme.palette.mode === "dark" ? "#000" : "#fff",
                      p: 3,
                      mx: {
                        xs: 0,
                        sm: "6rem",
                      },
                    }}
                  >
                    <Stack
                      key={i}
                      alignItems="center"
                      justifyContent="center"
                      sx={{
                        height: "100%",
                        position: "relative",
                      }}
                    >
                      <Box
                        component="img"
                        src={member.url}
                        sx={{
                          width: "7rem",
                          height: "7rem",
                          border: "3px solid",
                          borderColor:
                            theme.palette.mode === "dark"
                              ? "background.default"
                              : "#fff",
                          borderRadius: "50%",
                          top: "-52%",
                          objectFit: "cover",
                          mb: 3,
                          transform: "translateY(-25%)",
                          position: "absolute",
                        }}
                      ></Box>
                      <Typography
                        variant="h4"
                        sx={{
                          fontSize: "1.5rem",
                          marginTop: 7,
                          textAlign: "center",
                        }}
                      >
                        {member.name}
                      </Typography>
                      <Typography
                        variant="p"
                        sx={{
                          textAlign: "center",
                        }}
                      >
                        {member.post}
                      </Typography>
                    </Stack>
                  </Grid>
                );
              })}
            </Grid>
          </Box>
        ) : (
          <Grid
            container
            spacing={0}
            alignItems="center"
            justifyContent="center"
          >
            <Grid item xs={12}>
              <Grid
                container
                direction="row"
                alignItems="center"
                justifyContent="center"
              >
                {MemberCard(MEMBERS[1])}
                <Grid item xs={3}></Grid>
                {MemberCard(MEMBERS[2])}
              </Grid>
            </Grid>
            <Grid
              item
              xs={12}
              sx={{
                zIndex: 1,
              }}
            >
              <Grid container alignItems="center" justifyContent="center">
                {MemberCard(MEMBERS[0])}
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid
                container
                direction="row"
                alignItems="center"
                justifyContent="center"
              >
                {MemberCard(MEMBERS[3])}
                <Grid item xs={3}></Grid>
                {MemberCard(MEMBERS[4])}
              </Grid>
            </Grid>
          </Grid>
        )}
      </Container>
    </Box>
  );
}

function MemberCard(member) {
  const CUSTOM_HEIGHT = 300;
  const theme = useTheme();

  return (
    <Grid
      item
      xs={3}
      sx={{
        width: "100%",
        minHeight: CUSTOM_HEIGHT,
        mx: -5,
        my: -3,
        border: "2px solid",
        borderColor: theme.palette.mode === "dark" ? "secondary.main" : "#fff",
        borderRadius: "1rem",
        backgroundColor:
          theme.palette.mode === "dark" ? "#fff" : "secondary.main",
        "&:hover": {
          scale: "105%",
          boxShadow: "1px 1px 50% #000",
        },
        transitionDuration: "0.3s",
      }}
    >
      <Stack
        alignItems="center"
        justifyContent="center"
        sx={{
          height: "100%",
          p: 3,
        }}
      >
        <Box
          component="img"
          src={member.url}
          sx={{
            width: "7rem",
            height: "7rem",
            border:
              "3px solid " +
              (theme.palette.mode === "dark" ? "#400000" : "#fff"),
            borderRadius: "50%",
            objectFit: "cover",
            mb: 3,
          }}
        ></Box>
        <Typography
          variant="h4"
          sx={{
            color: theme.palette.mode === "dark" ? "#000" : "#fff",
            textAlign: "center",
          }}
        >
          {member.name}
        </Typography>
        <Typography
          variant="p"
          sx={{
            color: theme.palette.mode === "dark" ? "#000" : "#fff",
            textAlign: "center",
          }}
        >
          {member.post}
        </Typography>
      </Stack>
    </Grid>
  );
}
