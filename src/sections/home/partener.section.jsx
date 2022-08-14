import { Box, styled, Typography, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";
import AnimatedPartenersCard from "../../components/animatedParterners";

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
    <Box my={10}>
      <Flex>
        <Typography variant="h3" color="text.primary">
          {t("PARTNER_SECTION_TITLE")}
        </Typography>
      </Flex>
      <AnimatedPartenersCard />
    </Box>
  );
}
