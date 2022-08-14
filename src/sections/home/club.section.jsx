import * as React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Masonry from "@mui/lab/Masonry";
import Container from "@mui/material/Container";
import { useTranslation } from "react-i18next";

import LOGO_C2E from "../../assets/logo/logo-c2e.png";
import COVER_C2E from "../../assets/images/cover-c2e.jpg";
import LOGO_C3LF from "../../assets/logo/logo-c3lf.jpg";
import LOGO_CYBERSECURITY from "../../assets/logo/logo-cybersecurity.jpg";
import COVER_EPC from "../../assets/images/cover-ecp.jpg";
import LOGO_MULTIMEDIA from "../../assets/logo/logo-multimedia.jpg";

import { ClubCard } from "../../components/clubCard";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export function ClubSection() {
  const { t } = useTranslation();

  const CLUBS = [
    {
      name: "Club d'Entraide de l'Ecole Nationale d'Informatique",
      initial: "C2E",
      description: t("C2E_DESCRIPTION"),
      logo: LOGO_C2E,
      cover: COVER_C2E,
      height: 500,
    },
    {
      name: "Club de Linux et Logiciel Libre de Fianarantsoa",
      initial: "C3LF",
      description: t("C3LF_DESCRIPTION"),
      logo: LOGO_C3LF,
      cover: LOGO_C2E,
      height: 400,
    },
    {
      name: "ENI Pri",
      initial: "EPC",
      description: t("EPC_DESCRIPTION"),
      // logo: LOGO_C2E,
      cover: COVER_EPC,
      height: 350,
    },
    {
      name: "Multimedia",
      description: t("MULTIMEDIA_CLUB_DESCRIPTION"),
      logo: LOGO_MULTIMEDIA,
      cover: LOGO_C2E,
      height: 500,
    },
    {
      name: "English Club based on practice",
      initial: "ECP",
      description: t({}),
      // logo: LOGO_C2E,
      cover: LOGO_C2E,
      height: 400,
    },
    {
      name: "ENI Cybersecurity",
      description: t("CYBERSECURITY_DESCRIPTION"),
      logo: LOGO_CYBERSECURITY,
      cover: LOGO_C2E,
      height: 400,
    },
  ];

  return (
    <Container>
      <Box>
        <Masonry
          columns={{
            md: 3,
            sm: 2,
            xs: 1,
          }}
          spacing={2}
          sx={{
            m: 0,
          }}
        >
          {CLUBS.map((club, i) => {
            return <ClubCard key={i} club={club} />;
          })}
        </Masonry>
      </Box>
    </Container>
  );
}
