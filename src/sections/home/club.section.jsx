import * as React from "react";

import Masonry from "@mui/lab/Masonry";
import { styled, Paper, Box, Typography } from "@mui/material";
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
import { useTransition } from "react";

const heights = [410, 350, 460, 460, 450, 400];

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  // padding: theme.spacing(0.5),
  textAlign: "center",
  color: theme.palette.text.secondary,
  overflow: "hidden",
  position: "relative",
  // border: "dotted",
}));

export default function BasicMasonry() {
  const { t } = useTranslation();

  const CLUBS = [
    {
      name: "Club d'Entraide de l'Ecole Nationale d'Informatique",
      initial: "C2E",
      description: t("C2E_DESCRIPTION"),
      logo: LOGO_C2E,
      cover: COVER1,
      height: 410,
    },
    {
      name: "Club de Linux et Logiciel Libre de Fianarantsoa",
      initial: "C3LF",
      description: t("C3LF_DESCRIPTION"),
      logo: LOGO_C3LF,
      cover: COVER_C3LF,
      height: 350,
    },
    {
      name: "ENI Pri",
      initial: "EPC",
      description: t("EPC_DESCRIPTION"),
      logo: LOGO_C2E,
      cover: COVER_EPC,
      height: 460,
    },
    {
      name: "Multimedia",
      description: t("MULTIMEDIA_CLUB_DESCRIPTION"),
      logo: LOGO_MULTIMEDIA,
      cover: COVER2,
      height: 450,
    },
    {
      name: "English Club based on practice",
      initial: "ECP",
      description: t({}),
      logo: LOGO_C2E,
      cover: COVER_EPC,
      height: 400,
    },
    {
      name: "ENI Cybersecurity",
      description: t("CYBERSECURITY_DESCRIPTION"),
      logo: LOGO_CYBERSECURITY,
      cover: COVER_C2E,
      height: 400,
    },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        px: { xs: 0, sm: 2, md: 5, lg: 20 },
        my: { lg: 20 },
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h3"
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
