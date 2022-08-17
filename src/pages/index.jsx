import { Box } from "@mui/material";
import React from "react";
import {
  ClubSection,
  EventSection,
  OrganismSection,
  FeatureSection,
  ContentHero,
} from "../sections/home";
import { PartenaireSection } from "../sections/home/partner.section";
import Group from "../assets/images/illustrations/illustration-group.png";

// mui custom font
export default function Home() {
  return (
    <div style={{ position: "relative" }}>
      <Box sx={{ bgcolor: "#2b0101", position: "relative" }}>
        {/* <div id="blur-radial"></div> */}
        <ContentHero />
        <FeatureSection />
      </Box>

      <EventSection />
      <ClubSection />
      <OrganismSection />
      <PartenaireSection />
    </div>
  );
}
