import { Box } from "@mui/material";
import React from "react";
import {
  ClubSection,
  ContentHero,
  EventSection,
  OrganismSection,
  FeatureSection,
} from "../sections/home";
import { PartenaireSection } from "../sections/home/partener.section";
import Group from "../assets/Group.png";

// mui custom font
export default function Home() {
  return (
    <div style={{ position: "relative" }}>
      <Box
        id="group-path"
        sx={{
          backgroundImage: `url(${Group})`,
        }}
      ></Box>
      <ContentHero />
      <FeatureSection />
      <EventSection />
      <ClubSection />
      <OrganismSection />
      <PartenaireSection />
    </div>
  );
}
