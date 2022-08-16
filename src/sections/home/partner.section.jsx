import { Box, styled, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { AnimatedPartners } from "../../components/animatedPartners";

const Flex = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  zIndex: 5,
}));

export function PartenaireSection() {
  const { t } = useTranslation();
  return (
    <Box my={10} id="partner">
      <Flex>
        <Typography variant="h2" fontWeight="bold" color="text.primary">
          {t("PARTNER_SECTION_TITLE")}
        </Typography>
      </Flex>
      <AnimatedPartners />
    </Box>
  );
}
