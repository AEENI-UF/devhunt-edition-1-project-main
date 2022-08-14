import * as React from "react";

import Masonry from "@mui/lab/Masonry";
import { styled, Paper, Box, Typography, useTheme } from "@mui/material";
import { ClubCard } from "../../components/clubCard";

import COVER_C3LF from "../../assets/img/pic.JPG";
import COVER_EPC from "../../assets/img/pic1.jpg";
import COVER_C2E from "../../assets/img/pic2.JPG";
import COVER1 from "../../assets/img/pic3.JPG";
import COVER2 from "../../assets/img/pic4.jpg";

import LOGO_C3LF from "../../assets/logo/c3lf-logo.jpg";
import LOGO_CYBERSECURITY from "../../assets/logo/cybersec-logo.jpg";
import LOGO_MULTIMEDIA from "../../assets/logo/multimedia-logo.jpg";
import LOGO_C2E from "../../assets/logo/c2e-logo.png";

import { useTranslation } from "react-i18next";

const heights = [410, 350, 460, 460, 450, 400];

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
  const theme = useTheme();

  const CLUBS = [
    {
      name: "Club de Linux et Logiciel Libre de Fianarantsoa",
      initial: "C3LF",
      description: t("C3LF_DESCRIPTION"),
      link: "/club/c3lf",
      logo: LOGO_C3LF,
      cover: COVER_C2E,
      height: 500,
    },
    {
      name: "ENI Praise",
      initial: "EPC",
      description: t("EPC_DESCRIPTION"),
      link: "/club/epc",
      logo: LOGO_MULTIMEDIA,
      cover: COVER_EPC,
      height: 350,
    },
    {
      name: "Club d'Entraide de l'Ecole Nationale d'Informatique",
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
      cover: COVER2,
      height: 450,
    },
    {
      name: "English Club based on practice",
      initial: "ECP",
      description: t({}),
      link: "/club/ecp",
      logo: LOGO_C2E,
      cover: COVER_EPC,
      height: 400,
    },
    {
      name: "ENI Cybersecurity",
      description: t("CYBERSECURITY_DESCRIPTION"),
      link: "/club/cybersecurity",
      logo: LOGO_CYBERSECURITY,
      height: 400,
      cover: COVER_EPC,
    },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        px: { xs: 0, sm: 2, md: 5, lg: 15 },
        my: { lg: 20 },
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h3"
        color="text.primary"
        sx={{ mb: 5, fontSize: { xs: 40, sm: 45, lg: 60 } }}
      >
        {t("CLUB_SECTION_TITLE")}
      </Typography>
      <Masonry columns={{ xs: 1, sm: 2, md: 3 }} spacing={2}>
        {CLUBS.map((club, index) => (
          <Item key={index} sx={{ height: club.height }}>
            <ClubCard i={index} club={club} />
          </Item>
        ))}
      </Masonry>
    </Box>
  );
}
