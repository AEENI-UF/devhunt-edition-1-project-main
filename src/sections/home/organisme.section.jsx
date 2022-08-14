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

import PROFILE_PRESIDENT from "../../assets/images/profile-president.jpg";

export function OrganismSection() {
  const { t } = useTranslation();
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const MEMBERS = [
    {
      name: "Ralinirina Rosa Elysabeth",
      post: t("PRESIDENT"),
      url: PROFILE_PRESIDENT,
    },
    {
      name: "Rafanomezantsoa Eldinoh Laurice",
      post: t("COMPETITION_MANAGER"),
      url: "",
    },
    {
      name: "Rakotozafy Prisca Tiana",
      post: t("FINANCIAL_CONTROLLER"),
      url: "",
    },
    {
      name: "Ralaivao Niaiko Michaël",
      post: t("COMPETITION_MANAGER"),
      url: "",
    },
    {
      name: "Rakotomanana Norofaneva Miarimbola",
      post: t("TREASURER"),
      url: "",
    },
  ];

  return (
    <Box
      sx={{
        py: 10,
      }}
    >
      <Container>
        <Typography
          variant="h2"
          sx={{
            textAlign: "center",
            mb: 5,
            color: theme.palette.mode === "dark" ? "#fff" : "#000",
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
                gap: 1,
              }}
            >
              {MEMBERS.map((member, i) => {
                return (
                  <Grid
                    item
                    xs={12}
                    sm={5}
                    sx={{
                      border: "1px solid #ccc",
                      borderRadius: "1rem",
                      backgroundColor:
                        theme.palette.mode === "dark"
                          ? "#fff"
                          : "secondary.main",
                      color: theme.palette.mode === "dark" ? "#000" : "#fff",
                      p: 3,
                    }}
                  >
                    <Stack
                      key={i}
                      alignItems="center"
                      justifyContent="center"
                      sx={{
                        height: "100%",
                      }}
                    >
                      <Box
                        component="img"
                        src={member.url}
                        sx={{
                          width: "7rem",
                          height: "7rem",
                          border: "3px solid #fff",
                          borderRadius: "50%",
                          objectFit: "cover",
                          mb: 3,
                        }}
                      ></Box>
                      <Typography variant="h4">{member.name}</Typography>
                      <Typography variant="p">{member.post}</Typography>
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
            <Grid item xs={12}>
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
        m: 1,
        border: "1px solid #ccc",
        borderRadius: "1rem",
        backgroundColor:
          theme.palette.mode === "dark" ? "#fff" : "secondary.main",
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
            // border: "3px solid #fff",
            border:
              "3px solid " +
              (theme.palette.mode === "dark" ? "#a66700" : "#fff"),
            borderRadius: "50%",
            objectFit: "cover",
            mb: 3,
          }}
        ></Box>
        <Typography
          variant="h4"
          sx={{
            color: theme.palette.mode === "dark" ? "#000" : "#fff",
          }}
        >
          {member.name}
        </Typography>
        <Typography
          variant="p"
          sx={{
            color: theme.palette.mode === "dark" ? "#000" : "#fff",
          }}
        >
          {member.post}
        </Typography>
      </Stack>
    </Grid>
  );
}
