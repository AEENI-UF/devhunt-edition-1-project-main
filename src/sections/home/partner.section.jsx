import { Box, Container, Grid, Stack, styled, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

// Logo
import Akata from "../../assets/logos/partner/akata.png";
import Arato from "../../assets/logos/partner/arato.jpg";
import Kalybot from "../../assets/logos/partner/kalybot.png";
import Mahefa from "../../assets/logos/partner/mahefa.png";
import Nga from "../../assets/logos/partner/nga.png";
import Wecours from "../../assets/logos/partner/wecours.png";

const Flex = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  rowGap: 30,
  alignItems: "center",
  position: "relative",
  zIndex: 5,
  // backgroundColor: "red",
  borderRadius: 10,
}));

const PARTNERS = [
  {
    name: "Akata",
    img: Akata,
  },
  {
    name: "Arato",
    img: Arato,
  },
  {
    name: "Kalybot",
    img: Kalybot,
  },
  {
    name: "Mahefa Numeric",
    img: Mahefa,
  },
  {
    name: "NG Academy",
    img: Nga,
  },
  {
    name: "We Cours",
    img: Wecours,
  },
];

export function PartenaireSection() {
  const { t } = useTranslation();
  return (
    <Box
      id="partner"
      sx={{
        py: "7rem",
      }}
    >
      <Container>
        <Flex sx={{ py: 5 }}>
          <Box>
            <Typography variant="h2" fontWeight="bold" color="text.primary">
              {t("PARTNER_SECTION_TITLE")}
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {PARTNERS.map((partner) => {
              return (
                <Grid
                  lg={4}
                  item
                  key={partner.name}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <img
                    src={partner.img}
                    alt={partner.name}
                    style={{ width: 80, height: 80, borderRadius: "50%" }}
                  />
                </Grid>
              );
            })}
          </Grid>
        </Flex>
      </Container>
    </Box>
  );
}
