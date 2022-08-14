import React from "react";
import { OrganismSection } from "../sections/home/organisme.section";
import { PartenaireSection } from "../sections/home/partener.section";
import { ClubSection } from "../sections/home/club.section";

// mui custom font
export default function Home() {
  return (
    <div>
      <ClubSection />
      {/* <PartenaireSection /> */}
      <OrganismSection />
    </div>
  );
}
