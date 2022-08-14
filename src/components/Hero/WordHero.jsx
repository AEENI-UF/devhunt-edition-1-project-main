import { Typography, Box } from '@mui/material';
import * as React from 'react';
import {useTranslation} from 'react-i18next';

export default function WordHero() {
  const {t}=useTranslation();
  return (
    <Box sx={{ padding: { xs: "18px", md: "32px" } }}>
      <Typography
        variant="h2"
        color="text.primary"
        sx={{ fontWeight: "bold", paddingBottom: "23px" }}
      >
        {
        t("SLOGAN_AEENI")
        }
      </Typography>
      <Typography
        variant="subtitle1"
        color="text.primary"
      >
        {
          t("AEENI_DESCRIPTION")
        }
      </Typography>
    </Box>
  )
}