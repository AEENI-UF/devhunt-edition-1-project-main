import React from "react";
import { OrganismSection } from "../sections/home/organisme.section";
import { PartenaireSection } from "../sections/home/partener.section";
import ContentHero from '../sections/home/hero.section';
import EventSection from '../sections/home/event.section';
import ClubSection from "../sections/home/club.section";

// mui custom font
export default function Home() {
  return (
    <div>
      <ContentHero/>
      <EventSection/>
      <ClubSection />
      <OrganismSection />
      <PartenaireSection />
    </div>
  );
}
