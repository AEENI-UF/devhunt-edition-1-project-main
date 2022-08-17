import * as React from "react";

import Masonry from "@mui/lab/Masonry";
import { styled, Paper, Box, Typography, Container } from "@mui/material";
import { ClubCard } from "../../components/clubCard";

import COVER_C3LF from "../../assets/images/clubs/cover-c3lf.jpg";
import COVER_EPC from "../../assets/images/clubs/cover-epc.jpg";
import COVER_C2E from "../../assets/images/clubs/cover-c2e.jpg";
import COVER_MULTIMEDIA from "../../assets/images/clubs/cover-multimedia.jpg";
import COVER_CYBERSECURITY from "../../assets/images/clubs/cover-cybersecurity.jpg";
import COVER_ECP from "../../assets/images/clubs/cover-ecp.jpg";

import LOGO_C3LF from "../../assets/logos/logo-c3lf.jpg";
import LOGO_CYBERSECURITY from "../../assets/logos/logo-cybersecurity.jpg";
import LOGO_MULTIMEDIA from "../../assets/logos/logo-multimedia.jpg";
import LOGO_C2E from "../../assets/logos/logo-c2e.png";

import { useTranslation } from "react-i18next";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  // padding: theme.spacing(0.5),
  textAlign: "center",
  color: theme.palette.text.secondary,
  overflow: "hidden",
  position: "relative",
}));

export function ClubSection() {
  const { t } = useTranslation();

  const CLUBS = [
    {
      name: "Club de Linux et Logiciel Libre de Fianarantsoa",
      initial: "C3LF",
      description: t("C3LF_DESCRIPTION"),
      link: "/club/c3lf",
      logo: LOGO_C3LF,
      cover: COVER_C3LF,
      height: 500,
    },
    {
      name: "ENI Praise Christ",
      initial: "EPC",
      description: t("EPC_DESCRIPTION"),
      link: "/club/epc",
      cover: COVER_EPC,
      height: 400,
    },
    {
      name: "Club d'Entraide de l'ENI",
      initial: "C2E",
      description: t("C2E_DESCRIPTION"),
      link: "/club/c2e",
      logo: LOGO_C2E,
      cover: COVER_C2E,
      height: 520,
    },
    {
      name: "Multimedia",
      description: t("MULTIMEDIA_CLUB_DESCRIPTION"),
      link: "/club/multimedia",
      logo: LOGO_MULTIMEDIA,
      cover: COVER_MULTIMEDIA,
      height: 450,
    },
    {
      name: "English Club based on Practice",
      initial: "ECP",
      description: t("ECP_DESCRIPTION"),
      link: "/club/ecp",
      cover: COVER_ECP,
      height: 400,
    },
    {
      name: "ENI Cybersecurity",
      description: t("CYBERSECURITY_DESCRIPTION"),
      link: "/club/cybersecurity",
      logo: LOGO_CYBERSECURITY,
      height: 400,
      cover: COVER_CYBERSECURITY,
    },
  ];

  return (
    <Box
      id="club"
      sx={{
        width: "100%",
        px: { xs: 0, sm: 2, md: 5, lg: 15 },
        my: { xs: 10, lg: 20 },
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container>
        <Typography
          variant="h2"
          color="text.primary"
          sx={{
            fontWeight: "bold",
            marginBottom: "43px",
            marginTop: "94px",
            textAlign: { xs: " left", lg: "center" },
            position: "relative",
            px: 2,
          }}
        >
          {t("CLUB_SECTION_TITLE")}
        </Typography>
        <Masonry columns={{ xs: 1, sm: 2, md: 3 }} spacing={2}>
          {CLUBS.map((club, index) => (
            <Item key={index} sx={{ height: club.height }}>
              <ClubCard club={club} />
            </Item>
          ))}
        </Masonry>
      </Container>
    </Box>
  );
}
