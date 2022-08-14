import React from "react";
import { OrganismSection } from "../sections/home/organisme.section";
import { PartenaireSection } from "../sections/home/partener.section";
import { ClubSection } from "../sections/home/club.section";
import ContentHero from '../sections/home/hero.section';
import EventSection from '../sections/home/event.section'

// mui custom font
export default function Home() {
  return (
    <div>
      <ContentHero/>
      <EventSection/>
      <ClubSection />
      {/* <PartenaireSection /> */}
      <OrganismSection />
    </div>
  );
}
