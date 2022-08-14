import React from "react";
import {
  ClubSection,
  ContentHero,
  EventSection,
  OrganismSection,
  FeatureSection,
} from "../sections/home";
import { PartenaireSection } from "../sections/home/partener.section";

// mui custom font
export default function Home() {
  return (
    <div>
      <ContentHero />
      <FeatureSection />
      <EventSection />
      <ClubSection />
      <OrganismSection />
      <PartenaireSection />
    </div>
  );
}
